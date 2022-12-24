const mongoose = require('mongoose');
const Chat = require('../../server/models/chat');
const Message = require('../../server/models/message');
let Tickets = require('../../server/models/ticketsModal');
// const Tickets = mongoose.model('TicketModel');
const io = require('socket.io')(3001)
// const io = require('socket.io')
require("dotenv").config({path: require('find-config')('.env')});
const username = process.env.DATABASE_CONNECTION_USERNAME;
const password = process.env.DATABASE_CONNECTION_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;

const changeStream = Tickets.watch()

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('Connected')
}).catch(err => console.log(err))

// changeStream.on('change', (change) => {
//
//   console.log('Change detected:', change);
//   if (change.operationType === 'insert') {
//     // Tickets.find({}, (err, ticket) => {
//
//       console.log('TicketData Fetched:', change);
//       // req.io.emit('new data', ticket.fullDocument);
//       // io.emit('data-update', ticket.fullDocument);
//       // send('Event emitted');
//     }
//   // } else if (change.operationType === 'update') {
//   //   console.log("Updated.")
//   // }
// });

io.on('connection', (socket) => {
  console.log('A user connected');

  // Tickets.watch().on('change', next => {
  //   console.log('a change occurred:', next);
  //   // io.emit('database update', next);
  // });
  Chat.find().then(result => {
    socket.emit('user-chats', result)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on("send-message", async (message, student, tutor, sender) => {
    console.log("Message sent by " + student + " : " + message + " to: " + tutor);
    await Chat.findOneAndUpdate(
      {tutor: tutor, student: student},
      {$push: {messages: new Message({message: message, sender: sender})}},
    );
  });


  socket.on("join-chat", async (student, tutor) => {
    socket.join(student + tutor);
    io.to(student + tutor).emit("update-chat", await Chat.findOne({tutor: tutor, student: student}));
    Chat.find({student: student}).then(result => {
      socket.emit('user-chats', result)
    });
    console.log("test")
  })
});

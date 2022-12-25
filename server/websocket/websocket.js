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

io.on('connection', (socket) => {
  console.log('A user connected');

  Chat.find().then(result => {
    socket.emit('user-chats', result)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  Tickets.find({}).then(result => {
    socket.emit('data', result)
  });

  // Set up a listener for the 'getData' event
  socket.on('getData', async () => {
    // Fetch updated data from the database
    // const data = Tickets.find();
    // Send the updated data to the client
    // await const result= Tickets.find();
    // socket.emit('data', result);
    Tickets.find({}).then(result => {
      socket.emit('data', result)
    });
  });

  // io.to().emit("update-tickets", await Tickets.findOne({}));
  // Tickets.find({}).then(result => {
  //   socket.emit('user-chats', result)
  // });

  // socket.on("create-ticket", async (message, student, tutor, sender) => {
  //   console.log("New ticket: " + student + " : " + message + " to: " + tutor);
  //   await Tickets.findOneAndUpdate(
  //     {tutor: tutor, student: student},
  //     {$push: {messages: new Message({message: message, sender: sender})}},
  //   );
  // });

  // Send the data to the client through the Socket.io connection
  // socket.emit('data', data);

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
    // console.log("test")
  })

  const changeStream = Tickets.watch();
  changeStream.on('change', (change) => {
    console.log('Change detected in the tickets collection:', change);

    // Fetch the updated data from the database
    // const data = Tickets.find({})

    // Send the updated data to all connected clients
    // io.emit('data', data);

    Tickets.find({}).then(result => {
      socket.emit('data', result)
    });
  });
});





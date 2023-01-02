const mongoose = require('mongoose');
const Chat = require('../../server/models/chat');
const Message = require('../../server/models/message');
let Tickets = require('../../server/models/ticketsModal');
const io = require('socket.io')(3001)
require("dotenv").config({path: require('find-config')('.env')});
const username = process.env.DATABASE_CONNECTION_USERNAME;
const password = process.env.DATABASE_CONNECTION_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('connected')
}).catch(err => console.log(err))
io.on('connection', (socket) => {
  console.log('a user connected');
  Chat.find({student: "test6"}).then(result => {
    if (result.length !== 0) {
      console.log("Chats gevonden voor student test6: " + result)
      socket.emit('user-chats', result)
    }
    else if (result.length === 0) {
      console.log("geen chats voor test6 als student. Nu als tutor checken.")
      Chat.find({tutor: "test6"}).then(result => {
        if (result.length !== 0) {
          socket.emit('user-chats', result)
        } else if (result.length === 0) {
          console.log("Ook geen chats voor test6 als tutor.")
        }
      })
    }
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on("get-chats", async (student) => {
    console.log(student);
    await Chat.find({student: student}).then(result => {
      socket.emit("user-chats", result)
    });
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
    // Chat.find({student: student}).then(result => {
    //   socket.emit('user-chats', result)
    // })
  })

  //This Renders at the start of visiting the page
  Tickets.find({}).then(result => {
    socket.emit('data', result)
  });

  const changeStream = Tickets.watch();
  changeStream.on('change', (change) => {
    console.log('Change detected in the tickets collection:', change);

    // Fetch the updated data from the database
    Tickets.find().then(result => {
      socket.emit('update-tickets', result)
    });
  });
});

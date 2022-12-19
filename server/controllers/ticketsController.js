const mongoose = require('mongoose'),
  Tickets = mongoose.model('Tickets');
const { Server } = require("socket.io");
const io = new Server();


const changeStream = Tickets.watch()

changeStream.on('change', (next) => {
  console.log('Test ',next);
});



// console.log('Client: ', mongoose)
// changeStream = Tickets.watch();
// // set up a listener when change events are emitted
// changeStream.on("change", next => {
//   // process any change event
//   switch (next.operationType) {
//     case 'insert':
//       console.log(next.fullDocument.message);
//       break;
//     case 'update':
//       console.log(next.updateDescription.updatedFields.message);
//   }
// });

// Tickets.watch([]).on("change",(data)=>{
//   console.log({data})
// })
Tickets.watch([]).on("change", data => {
  // process any change event

  console.log('Data', data)
  switch (data.operationType) {
    case 'insert':
      io.emit('chat message', data.fullDocument);
      console.log('Insert: ',data.fullDocument);
      break;
    case 'update':
      io.emit('Ticket message', data.updateDescription.updatedFields.createdBy);
      console.log('Updated: ',data.updateDescription.updatedFields.createdBy);
  }
});


// Create a change stream. The 'change' event gets emitted when there's a
// change in the database. Print what the change stream emits.
// Tickets.watch().on('change', data => console.log('Changed data is: ', data));


// const changeStream = Tickets.watch();
// changeStream.on("change", (change) => {
//   console.log("Tickets COLLECTION CHANGED");
//   // CODE FROM BELOW GOES HERE
// });

// Socket Connection


// const getUpdatedTickets = async (io) => {
//   io.on('connection', (socket) => {
//     console.log('Connection!');
//
//     // USERS - Change
//     changeStream.on('change', (change) => {
//       console.log('COLLECTION CHANGED');
//
//       Tickets.find({}, (err, data) => {
//         if (err) throw err;
//
//         if (data) {
//           // RESEND ALL USERS
//           socket.emit('Tickets', data);
//         }
//       });
//     });
//   });
// }

// Retrieve all the tasks saved in the database
const getTickets = async (req, res) => {
  Tickets.find({}, function (err, ticket) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200)
      res.json(ticket);
      // res.send("Get all Tickets");
    }
  });
};

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on("send-message", async (message, student, tutor, sender) => {
//     console.log("Message sent by " + student + " : " + message + " to: " + tutor);
//     await   Tickets.find({}, function (err, ticket) {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200)
//         res.json(ticket);
//         // res.send("Get all Tickets");
//       }
//     });
//   });
// });

const getAllWorkouts = (req, res) => {
  res.send("Get all workouts");
};

// Create a new task
const createTicket = async (req, res) => {
  const newTicket = new Tickets(req.body);
  await newTicket.save(function (err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(task);
    }
  });
};

// Retrieve a task by taskId
exports.getTaskById = (req, res) => {
  Tickets.findById(req.params.id, function (err, task) {
    if (err) {
      res.status(404).send({
        error: {
          errors: [{
            domain: 'global', reason: 'notFound', message: 'Not Found',
            description: 'Couldn\'t find the requested taskId \'' + req.params.id + '\''
          }], err, code: 404
        }
      })
    } else {
      res.json(task);
    }
  });
};

// Edit a task by taskId
exports.editTaskById = (req, res) => {
  Tickets.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(task);
    }
  });
};

// Delete a task by taskId
exports.deleteTaskById = (req, res) => {
  Tickets.remove({
    _id: req.params.id
  }, function (err, task) {
    if (err) {
      res.status(404).send({
        error: {
          errors: [{
            domain: 'global', reason: 'notFound', message: 'Not Found',
            description: 'Couldn\'t find the requested taskId \'' + req.params.id + '\''
          }], code: 404, message: 'Not Found'
        }
      })
    } else {
      res.status(204).send();
      //res.json({ message: 'Task successfully deleted' });
    }
  });
};

module.exports = {
  getAllWorkouts,
  getTickets,
  createTicket,

  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout,
};

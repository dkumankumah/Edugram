const mongoose = require('mongoose'),
Tickets = mongoose.model('Tickets');
const io = require("yarn/lib/cli");


// Tickets.watch([]).on("change",(data)=>{
//   console.log({data})
// })

// Create a change stream. The 'change' event gets emitted when there's a
// change in the database. Print what the change stream emits.
Tickets.watch().
on('change', data => console.log(data));

// await Tickets.create({
//   createdBy: "testUser@example.com",
//   assignedBy: "admi2n@example.com",
//   dateCreated: "1970-01-20T08:01:33.518Z",
//   dateOfEnding: "Tue Oct 11 2022 00:00:00 GMT+0200 (Central European Summer Time)",
//   status: [
//     "Open"
//   ],
//   subject: "testing testing",
//   escription: "I am having trouble logging into the system",
//   _id: "6391b54e64901ecd3b78a2f8",
//   __v: 0
// });



const changeStream= Tickets.watch()


// Retrieve all the tasks saved in the database
exports.getTickets = async function (req, res) {
  await Tickets.find({}, function (err, ticket) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200)
      res.json(ticket);
    }
  });

};

// Create a new task
exports.createTicket = async function (req, res) {
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
exports.getTaskById = function (req, res) {
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
exports.editTaskById = function (req, res) {
  Tickets.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(task);
    }
  });
};

// Delete a task by taskId
exports.deleteTaskById = function (req, res) {
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

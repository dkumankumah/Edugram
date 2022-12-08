const mongoose = require('mongoose'),
Tickets = mongoose.model('Tickets');
const io = require("yarn/lib/cli");
import {ChangeEvent} from "react";


// Tickets.watch([]).on("",(data:ChangeEvent)=>{
//   console.log({data})
// })


const changeStream= Tickets.watch()


// Retrieve all the tasks saved in the database
exports.getTickets = function (req, res) {
  Tickets.find({}, function (err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200)
      res.json(task);
    }
  });
};

// Create a new task
exports.createTicket = function (req, res) {
  const newTicket = new Tickets(req.body);
  newTicket.save(function (err, task) {
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

const mongoose = require('mongoose'),
  Tickets = mongoose.model('Tickets');
const io = require("yarn/lib/cli");


// Create a change stream. The 'change' event gets emitted when there's a
// change in the database. Print what the change stream emits.
Tickets.watch().on('change', data => console.log('Changed data is: ', data));


// Retrieve all the tasks saved in the database
exports.getTickets = async (req, res) => {
  Tickets.find({}, function (err, ticket) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200)
      res.json(ticket);
    }
  });
};

// Create a new task
exports.createTicket = async (req, res) => {
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

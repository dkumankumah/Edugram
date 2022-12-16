const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    createdBy: {
      type: String,
      required: true,
    },
    assignedBy: {
      type: String,
      required: true
    },
    dateCreated: {
      type: Date,
      required: true,
      default: Date.now()
    },
    dateOfEnding: {
      type: String,
      required: false
    },
    status: {
      type: [{
        type: String,
        enum: ['Open', 'Pending', 'Closed']
      }],
      default: ['Open']
    },
    subject: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
);

module.exports = mongoose.model('Tickets', ticketSchema)

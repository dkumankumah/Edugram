const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const chatSchema = new Schema({
  messages: {
    type: [],
    required: true,
  },
  student: {
    type: [],
    required: true,
  },
  tutor: {
    type: [],
    required: true
  },
});

module.exports = mongoose.model('chat', chatSchema);

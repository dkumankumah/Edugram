const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const chatSchema = new Schema({
  messages: {
    type: Array,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  tutor: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('chat', chatSchema);

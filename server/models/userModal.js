const mongoose = require('mongoose')

const AddressSchema = {
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  }
};

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  dateOfBirth: {
    type: String,
    required: false
  },
  address: {
    type: AddressSchema,
    required: false
  },
  blocked: {
    type: Boolean,
    required: false
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;

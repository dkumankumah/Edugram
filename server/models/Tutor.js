const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// let Profile;
const Profile = new Schema({
  bio: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  }
})

const TutorSchema = new Schema({
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
    required: false
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

  profile: Profile,
  course: [
    {subject: String, fee: Number}
  ],
  request: [
    {id: String, firstName: String, lastName: String, location: String, subject: String, status: String}
  ]
});

module.exports = mongoose.model('tutor', TutorSchema);

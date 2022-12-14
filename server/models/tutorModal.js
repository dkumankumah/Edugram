const mongoose = require('mongoose')
const User = require("./userModal")

const TutorProfile = {
  bio: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false
  }
}

const UserSchema = User.schema

// Extend function
const extend = (Schema, obj) => (
  new mongoose.Schema(
    Object.assign({}, Schema.obj, obj)
  )
);

const tutorSchema = extend(UserSchema, {
  profile: {
    type: TutorProfile,
    required: false
  },
  course: [
    {subject: String, fee: Number}
  ],
  request: [
    {id: String, firstName: String, lastName: String, location: String, subject: String, status: String}
  ]
})

const Tutor = mongoose.model("Tutor", tutorSchema);

module.exports = Tutor


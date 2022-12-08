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

// let Course;
const Course = new Schema({
  subject: {
    type: String,
    required: false,
  },
  salary: {
    type: Number,
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
  profile: Profile,
  course: [
    {subject: String, salary: Number}
  ],
});

module.exports = mongoose.model('tutor', TutorSchema);

const mongoose = require('mongoose'),
  Tutors = mongoose.model('tutor'),
  Students = mongoose.model('student');

const blockUser = async (req, res) => {
  // Get the user ID from the request body
  const userId = req.body.userId;

  // Add the user ID to the list of blocked users in the database
  await User.updateOne({ _id: userId }, { blocked: true });

  res.send({ message: 'User blocked successfully' });
};

const editProfile = async (req, data) => {
  // Get the user ID from the request body
  const userId = req.body.userId;

  // Add the user ID to the list of blocked users in the database
  await User.updateOne({ _id: userId }, { blocked: true });

  res.send({ message: 'User blocked successfully' });
};


module.exports = {
  blockUser,
  editProfile
};

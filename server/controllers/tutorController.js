const mongoose = require('mongoose'),
  Tutors = mongoose.model('tutor');





// Retrieve all the tasks saved in the database
const getTutors = async (req, res) => {
  Tutors.find({}, function (err, ticket) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200)
      res.json(ticket);
      // res.send("Get all Tickets");
    }
  });
};


const uploadToMongoDb = async (req, res) => {
  Tutors.updateOne({ _id: req.body.id },
    { $set: { 'profile.image': req.file.path } }, (error, result) => {
    if (error) throw error;
    console.log('Image uploaded successfully');
    res.send('Image uploaded successfully');
  });
};


module.exports = {
  uploadToMongoDb
};

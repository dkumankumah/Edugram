const express = require('express')
const router = express.Router()
const Tutor = require('../models/Tutor')
const bcrypt = require('bcrypt')
const {verifyToken} = require("../middleware/authentication");
const {JsonWebTokenError} = require("jsonwebtoken");

// Get all tutors
router.get('/', async (req, res) => {
  try {
    const tutors = await Tutor.find()
    res.json(tutors);
  } catch (err) {
    res.json({message: err})
  }
});

// Adds a new tutor
router.post('/', async (req, res, next) => {
  const role = 'tutor';
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const tutor = new Tutor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    role: role
  });

  try {
    const savedTutor = tutor.save();
    res.status(201).json(savedTutor)
  } catch (err) {
    res.status(400).json({message: err})
  }

});

//Gets a specific tutor
router.get('/:tutorId', verifyToken, async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.tutorId);
    res.send(tutor);
  } catch (err) {
    res.json({message: err})
  }

});

router.delete('/:tutorId', verifyToken, async (req, res) => {
  try {
    const updateTutor = await Tutor.deleteOne(
      {_id: req.params.tutorId},
    );
    res.json(updateTutor);
  } catch (err) {
    res.json({message: err})
  }
})

//Update a specific tutor
router.put('/:tutorId', verifyToken, async (req, res, next) => {

  if (req.body.profile) {
    try {
      const updateTutor = await Tutor.updateOne(
        {_id: req.params.tutorId},
        {
          $set: {
            firstName: req.body.profile.firstName,
            lastName: req.body.profile.lastName,
            dateOfBirth: req.body.profile.formattedBirthDate,
            gender: req.body.profile.gender,
            phoneNumber: req.body.profile.phoneNumber,
          }
        });
      res.json(updateTutor);
    } catch (err) {
      res.json({message: err})
    }
  }

});

//Update a specific tutor
router.patch('/:tutorId', async (req, res) => {
  try {
    const updatedTutor = await Tutor.findByIdAndUpdate(req.params.tutorId, req.body, { new: true })
    res.send(updatedTutor);
  } catch (err) {
    res.json({message: err})
  }
});

//Retrieve tutors based on a specific subject
router.get('/search/:subject', async (req, res) => {
  try {
    const query = {"course.subject": req.params.subject}
    const tutors = await Tutor.find(query);
    res.json(tutors);
  } catch (err) {
    res.json({message: err})
  }
})

//login request
router.post('/tutor', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email)
  console.log(password)

  Tutor.findOne({email: req.body.email}, function (err, user) {
    if (!user) {
      console.log('no user found')
    } else {
      if (req.body.password === user.password) {
        console.log('Success Fully login');
      } else {
        console.log('invalid password')
      }
    }

  })

})

module.exports = router;


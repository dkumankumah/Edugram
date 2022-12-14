const express = require('express')
const router = express.Router()
const Tutor = require('../models/Tutor')
const bcrypt = require('bcrypt')

// Get all tutors
router.get('/', async (req, res) => {
    try{
        const tutors = await Tutor.find()
        res.json(tutors);
    } catch (err) {
        res.json({message: err})
    }
});

// Adds a new tutor
router.post('/', async (req, res) => {
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
router.get('/:tutorId', async (req, res) => {
    try{
        const tutor = await Tutor.findById(req.params.tutorId);
        res.send(tutor);
    } catch (err) {
        res.json({message: err})  
    }

});

//Update a specific tutor
router.patch('/:tutorId', async (req, res) => {
    try{
        const updateTutor = await Tutor.updateOne(
            { _id: req.params.tutorId},
            {$set: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                }});
        res.json(updateTutor);
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
  }
  catch (err) {
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


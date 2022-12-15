const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

const userValidation = [
  
    check("firstName").exists().notEmpty().withMessage("Firstname ican not be empty")
      .trim().escape(),
    check("lastName").exists().notEmpty()
      .trim().escape().bail(),
    check("email").exists().notEmpty().withMessage("Email can not be emptt")
      .isEmail().withMessage("Email")
      .trim().escape(),
    check("password").exists()
      .trim()
      .escape()
      .notEmpty().withMessage("Password can not be empty")
      .isLength({min: 8}).withMessage("Password must contain at leat 8 characters")
      .matches('[0-9]').withMessage("Password must contain numbers")
      .matches('[A-Z]').withMessage("Password must contain uppercase")
]

// Get all tutors
router.get(
  "/",
  async (req, res) => {
    try {
      const tutors = await Tutor.find();
      res.json(tutors);
    } catch (err) {
      res.json({ message: err });
    }
  }
);

// Adds a new tutor
router.post( "/tutor", [
  body('firstName').trim().escape().notEmpty().withMessage("First name can not be empty"),
  body('lastName').trim().escape().notEmpty().withMessage("Last name can not be empty"),
  body('email').trim().escape().notEmpty().withMessage("Email can not be empty")
    .isEmail().normalizeEmail().withMessage("Email is not valid"),
  body('password').trim().escape().notEmpty().withMessage("password can not be empty")
    .isLength({min: 8}).withMessage("password must have at least 8 characters"),
], async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const tutor = new Tutor({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors)
        // return res.status(400).json({ errors: errors.array() });
        // errors.array().forEach(error => {
        //   req.flash('error', error.msg)
        // })
        const messages = errors.array()
        // res.render('register', messages)
        return
      }

      const savedTutor = tutor.save();
      res.status(201).json(savedTutor);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
);

//Gets a specific tutor
router.get("/:tutorId", async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.tutorId);
    res.json(tutor);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a specific tutor
router.patch("/:tutorId", async (req, res) => {
  try {
    const updateTutor = await Tutor.updateOne(
      { _id: req.params.tutorId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
      }
    );
    res.json(updateTutor);
  } catch (err) {
    res.json({ message: err });
  }
});

//login request
router.post("/tutor", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password);

  Tutor.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      console.log("no user found");
    } else {
      if (req.body.password === user.password) {
        console.log("Success Fully login");
      } else {
        console.log("invalid password");
      }
    }
  });
});

module.exports = router;

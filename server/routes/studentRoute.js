const express = require("express");
const router = express.Router();
const Student = require("../models/studentModal");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");

const userValidation = [
  check("firstName")
    .exists()
    .notEmpty()
    .withMessage("Firstname can not be empty")
    .trim()
    .escape(),
  check("lastName").exists().notEmpty().trim().escape().bail(),
  check("email")
    .exists()
    .notEmpty()
    .withMessage("Email can not be empty")
    .isEmail()
    .withMessage("Email is not valid")
    .trim()
    .escape(),
  check("password")
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Password can not be empty")
    .isLength({ min: 8 })
    .withMessage("Password must contain at leat 8 characters")
    .matches("[0-9]")
    .withMessage("Password must contain numbers")
    .matches("[A-Z]")
    .withMessage("Password must contain uppercase"),
];

router.post("/", userValidation, async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
  });

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((error) => {
        console.log(error);
      });
      // res.status(400).json({ message: errors });
      res.status(400).json({errors: errors.array()})
    } else {
      student.save();
      res.status(201).json({ messsage: student });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;

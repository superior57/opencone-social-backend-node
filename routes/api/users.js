const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require('fs');

const DIR = 'uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR + "avatars/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
});
   
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
  }
});

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateUserUpdate = require('../../validation/user');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');
const Ad = require('../../models/Ad');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', upload.single("avatar"), (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const avatar = req.file ? "/avatars/" + req.file.filename : "";

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
        gender: req.body.gender,
        role: ""
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar, gender: user.gender, role: user.role }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
      role: req.user.role,
      gender: req.user.gender
    });
  }
);

/**
 * Get All Users
 */
router.get('/', 
passport.authenticate('jwt', { session: false }),
async (req, res) => {  
  if(req.user.role === "admin") {
    const users = await User.find();
    return res.json(users);
  } else {
    return res.status(400).json({
      youdonthavepermission: "You don't have permission to get User list"
    })
  }
})

/**
 * Get User details
 */
 router.get('/:userId', 
 passport.authenticate('jwt', { session: false }),
 async (req, res) => {
   const user = await User.findById(req.params.userId);
   const ads = await Ad.find({
     user
   }).populate(['sub_category', 'user'])
   .sort({ date: -1 });
   return res.json({
     ...user._doc,
     ads
   });
 })

 /**
  * Delete User
  */
 router.delete('/:userId',
 passport.authenticate('jwt', { session: false }), 
 async (req, res) => {
  if(req.user.role === "admin") {
    const user = await User.findById(req.params.userId);
    await user.remove();
    return res.json({
      success: true
    });
  } else {
    return res.status(400).json({
      youdonthavepermission: "You don't have permission to delete User"
    })
  }
})

/**
 * Update user
 */
router.post('/:userId', 
upload.single('avatar'),
passport.authenticate('jwt', { session: false }),
async (req, res) => {
  if(req.user.role === "admin") {
    const { errors, isValid } = validateUserUpdate(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const user = await User.findById(req.params.userId);
    user.name = req.body.name;
    user.email = req.body.email;
    user.gender = req.body.gender;
    user.role = req.body.role;

    if (req.file) {
      const avatar = "/avatars/" + req.file.filename;      
      user.avatar = avatar;
    }
    if (req.body.password) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          if (err) throw err;
          user.password = hash;
          await user.save();
          return res.json(user);
        });
      });
    } else {
      await user.save();
      return res.json(user);
    }
  } else {
    return res.status(400).json({
      youdonthavepermission: "You don't have permission to delete User"
    })
  }
})

module.exports = router;

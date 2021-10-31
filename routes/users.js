const express = require('express');
const passport = require('passport');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/user');

const User = require('../models/user');

router.get('/register', users.userRegister);

router.post('/register', catchAsync(users.register));

router.get('/login', users.loginuser);

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.postuser)

router.get('/logout', users.logoutuser)

module.exports = router;

const express = require('express');
const { register, login, logout, checkAuth } = require('../controllers/userController');
const passport = require("passport");
const { ROLES, inRole}= require(".././security/Rolemiddleware")
const verifyAuth = require('../middleware/verifyAuth');
const router = express.Router();


router.post('/register',register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/checkAuth', verifyAuth, checkAuth)

module.exports = router; 


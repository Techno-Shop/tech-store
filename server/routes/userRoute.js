const express = require('express');
const { register, login, logout, checkAuth } = require('../controllers/userController');
const verifyAuth = require('../middleware/verifyAuth');
const router = express.Router();


router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/checkAuth', verifyAuth, checkAuth)

module.exports = router;


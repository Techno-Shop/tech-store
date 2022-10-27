const express = require('express');
const { register, login, logout, checkAuth, getAllUsers, getOneUser } = require('../controllers/userController');
const verifyAuth = require('../middleware/verifyAuth');
const router = express.Router();


router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/checkAuth', verifyAuth, checkAuth)
router.get('/all', getAllUsers)
router.get('/:id', getOneUser)
module.exports = router;

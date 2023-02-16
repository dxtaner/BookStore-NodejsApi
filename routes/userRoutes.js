const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/users', userController.getUsers);

// Get by ıd user
router.get('/users/:id', userController.getUser);

// register
router.post('/users/register', userController.register);

// login
router.post('/users/login', userController.login);

// Add Book To User 
router.post('/users/addBookToUser',userController.addBookToUser);

// Get User Books
router.get('/users/getUserBooks/:userId', userController.getUserBooks);

// Delete by ıd user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

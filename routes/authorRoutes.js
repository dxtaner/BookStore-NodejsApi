const express = require('express');
const authorController = require('../controllers/authorController');
const router = express.Router();

// Get all authors
router.get('/authors', authorController.getAllAuthors);

// Add a new author
router.post('/authors', authorController.createAuthor);

// Get by ıd author
router.get('/authors/:id', authorController.getAuthorById);

// Delete by ıd author
router.delete('/authors/:id', authorController.deleteAuthor);

module.exports = router;

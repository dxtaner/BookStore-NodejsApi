const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  publicationDate: Date,
  pages: {
    type: Number,
    required: true,
  }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;

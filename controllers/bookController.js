const Book = require('../models/book');
const Author = require('../models/author');

exports.createBook = async (req, res) => {
  try {
    const author = await Author.findById(req.body.author);
    if (!author) return res.status(404).send({success: false, error: 'Author not found' });
    const book = new Book({
      title: req.body.title,
      author: author._id,
      publicationDate: req.body.publicationDate,
      pages: req.body.pages
    });

    await book.save();
    author.books.push(book._id);
    await author.save();

    res.status(201).send({success: true,book:book});
  } catch (error) {
    res.status(400).send({ error: error.message,success: false });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).send({book:books,success: true});
  } catch (error) {
    res.status(400).send({ error: error.message,success: false });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author');
    if (!book) return res.status(404).send({ error: 'Book not found' ,success:false});

    res.status(200).send({book:book,success: true});
  } catch (error) {
    res.status(400).send({ error: error.message ,success: false});
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id).populate('author');
    if (!book) return res.status(404).send({ error: 'Book not found',success: false });

    const author = await Author.findById(book.author._id);
    author.books = author.books.filter(b => b.toString() !== book._id.toString());
    await author.save();

    res.status(200).send({book:book,success: true});
  } catch (error) {
    res.status(400).send({ error: error.message,success: false });
  }
};

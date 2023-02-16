const Author = require('../models/author');
const Book = require('../models/book');

exports.createAuthor = async (req, res) => {
  try {
    const author = new Author({
      name: req.body.name,
      nationality: req.body.nationality,
      dateOfBirth: req.body.dateOfBirth
    });

    await author.save();

    res.status(201).send({ success: true, author: author });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find().populate('books');
    res.status(201).send({ success: true, author: authors });
  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('books');
    if (!author) return res.status(404).send({ error: 'Author not found', success: false });

    res.status(200).send({ success: true, author: author });
  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).send({ error: 'Author not found', success: false });

    await Book.deleteMany({ author: author._id }, { $unset: { author: '' } });

    res.status(200).send({ success: true, author: author });
  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
};

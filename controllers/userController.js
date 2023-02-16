const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Book = require('../models/book');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("books");
    res.status(200).json({ success: true, user: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("books")
    if (!user) return res.status(404).json({ message: 'User not found', success: false });
    res.status(200).json({ user: user, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: 'Email and password are required', success: false });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ error: 'Email or password is invalid', success: false });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ error: 'Incorrect email or password', success: false });
    }

    // const jwtSecret = process.env.JWT_SECRET;
    const tokenJwt = jwt.sign({ id: user._id }, jwtSecret);

    res.header('auth-token', tokenJwt).status(200).send({ user: user, token: tokenJwt, success: true });
  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).send({ error: 'User with this email already exists', success: false });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const tokenJwt = jwt.sign({ id: user._id }, jwtSecret);
    res.header('auth-token', tokenJwt).status(200).send({ token: tokenJwt, success: true, user: user });

  } catch (error) {
    res.status(400).send({ error: error.message, success: false });
  }
};

exports.addBookToUser = async (req, res) => {
  try {
    const book = await Book.findById(req.body.bookId);
    if (!book) {
      return res.status(400).send({ error: 'Book not found', success: false });
    }

    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(400).send({ error: 'User not found', success: false });
    }

    if (!user.books.includes(book._id)) {
      user.books.push(book._id);
      await user.save();
      return res.send({ message: 'Book added to user successfully', success: true, user: user });
    } else {
      return res.status(500).send({ error: 'The book has already been added', success: false });
    }

  } catch (error) {
    return res.status(500).send({ error: 'Error adding book to user', success: false });
  }
};

exports.getUserBooks = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('books');

    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false });
    }

    return res.status(200).json({ books: user.books, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found', success: false });
    res.status(200).json({ message: 'User deleted successfully', success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
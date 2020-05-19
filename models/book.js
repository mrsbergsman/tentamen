mongoose = require('mongoose');

mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  ISBN: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
  },
  SellerEmail: {
    type: String,
    required: true,
    unique: true
  },
  Used: {
    type: Boolean,
  },
  Location: {
    City: String,
    Street: String,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
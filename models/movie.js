const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
  },
  director: {
    type: String,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: 'Неправильный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: 'Неправильный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    validate: {
      validator: (v) => isURL(v),
      message: 'Неправильный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  movieID: {
    type: Number,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
  },
});

module.exports = mongoose.model('movie', movieSchema);

const { celebrate, Joi } = require('celebrate');
const { ObjectId } = require('mongoose').Types;
const validator = require('validator');

const validateEmailAndPassword = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .custom((value, helpers) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helpers.message('Невалидный email');
      })
      .messages({
        'any.required': 'Поле "email" обязательно должно быть заполнено',
      }),

    password: Joi.string().required()
      .messages({
        'any.required': 'Поле "password" обязательно должно быть заполнено',
      }),
  }).unknown(true),
});

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимальная длина поля "name" - 2',
        'string.max': 'Максимальная длина поля "name" - 30',
        'any.required': 'Поле "name" обязательно должно быть заполнено',
      }),

    email: Joi.string().required().email()
      .custom((value, helpers) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helpers.message('Невалидный email');
      })
      .messages({
        'any.required': 'Поле "email" обязательно должно быть заполнено',
      }),
  }).unknown(true),
});

const validateMovieBody = celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required()
      .messages({
        'any.required': 'Поле "nameRU" обязательно должно быть заполнено',
      }),
    duration: Joi.number().required()
      .messages({
        'any.required': 'Поле "duration" обязательно должно быть заполнено',
      }),
    image: Joi.string().required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message('Невалидный URL');
      })
      .messages({
        'any.required': 'Поле "image" обязательно должно быть заполнено',
      }),

    trailerLink: Joi.string().required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message('Невалидный URL');
      })
      .messages({
        'any.required': 'Поле "trailerLink" обязательно должно быть заполнено',
      }),
    thumbnail: Joi.string()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message('Невалидный URL');
      }),
    nameEN: Joi.string(),
    country: Joi.string(),
    director: Joi.string(),
    year: Joi.string(),
    description: Joi.string(),
    movieID: Joi.number(),
  }).unknown(true),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required()
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) {
          return value;
        }
        return helpers.message('Невалидный id');
      }),
  }).unknown(true),
});

const validateToken = celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
});

module.exports = {
  validateEmailAndPassword,
  validateUserBody,
  validateMovieBody,
  validateMovieId,
  validateToken,
};

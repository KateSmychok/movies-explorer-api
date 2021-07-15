require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const RateLimiter = require('limiter');
const routes = require('./routes/index');
const { errors } = require('celebrate');
const errorHandler = require('./middlewares/error-handler');
const { MONGODB_URL } = require('./config');

const app = express();

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const limiter = new RateLimiter({ tokensPerInterval: 150, interval: 'hour' });

app.use(limiter);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// Обработчик ошибок при валидации
app.use(errors());

// Централизованный обработчик ошибок
app.use(errorHandler);

const { PORT = 3000 } = process.env;

app.listen(PORT);

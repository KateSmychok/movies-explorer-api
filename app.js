const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/beatfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { PORT = 3000 } = process.env;

app.listen(PORT);

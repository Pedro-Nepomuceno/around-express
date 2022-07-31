const express = require('express');

const helmet = require('helmet');

const mongoose = require('mongoose');

const userRouter = require('./routes/users');

const cards = require('./routes/cards');

const app = express();

app.use(helmet());

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', userRouter);
app.use('/', cards);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {});

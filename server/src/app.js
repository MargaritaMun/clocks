const express = require('express');
const authRouter = require('./routes/auth.router');
const ClockRouter = require('./routes/clock.router')
const applicationRouter = require('./routes/application.router')
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/clocks', ClockRouter)
app.use('/api/application', applicationRouter)


app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: error.message });
});

module.exports = app;

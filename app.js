const express = require('express');
const userRouter = require('./routes/user.routes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./utils/globalErrorHandler');

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);

app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`));
});

app.use(globalErrorHandler);

module.exports = app;

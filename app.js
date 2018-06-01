var createError = require('http-errors');
var express     = require('express');
var path        = require('path');
var logger      = require('morgan');
var mongoose    = require('mongoose');
var config      = require('./config');

var apiRoute = require('./routes/api');

mongoose.connect(config.MONGO_URI, config.MONGO_OPTIONS);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongo connection error. Please check Mongo is running on the host');
  console.log(err);
});
db.once('open', function () {
  console.log('MongoDb connected.');
});


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;

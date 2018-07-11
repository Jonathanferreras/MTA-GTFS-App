const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const index_router = require('./routes/index');
const train_routes_router = require('./routes/TrainRoutes.route');
const train_trips_router = require('./routes/TrainTrips.route');
const train_stops_router = require('./routes/TrainStops.route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if(process.env.NODE_ENV.trim() !== 'production'){
  app.use(express.static(path.join(__dirname, 'public/dist')));
}


app.use('/', index_router);
app.use('/api/TrainRoute', train_routes_router);
app.use('/api/TrainTrips', train_trips_router);
app.use('/api/TrainStops', train_stops_router);
// app.use('/api/trips', trips_router);
// app.use('/api/stops', stops_router);


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
  res.render('error');
});

module.exports = app;

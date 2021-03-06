const production = process.env.NODE_ENV.trim() === 'production';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// uncomment if running app for production locally
// if(production) {
//   require('dotenv').config();
// }

const index_router = require('./routes/index');
const train_routes_router = require('./routes/TrainRoutes');
const train_trips_router = require('./routes/TrainTrips');
const train_stops_router = require('./routes/TrainStops');
const train_GTFS_router = require('./routes/TrainGTFS');
const google_maps_router = require('./routes/GoogleMapsApiKey');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if(production){
  app.use(express.static(path.join(__dirname, 'public/dist')));
  require('./utils/initModels');
}

app.use('/', index_router);
app.use('/api/TrainRoutes', train_routes_router);
app.use('/api/TrainTrips', train_trips_router);
app.use('/api/TrainStops', train_stops_router);
app.use('/api/TrainGTFS', train_GTFS_router);
app.use('/api/GoogleMapsApiKey', google_maps_router);

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
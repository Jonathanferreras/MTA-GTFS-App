const train_stop_model = require('../models/TrainStops.model');

exports.getAllTrainStops = () => {
  return new Promise((resolve, reject) => {
    train_stop_model.find({}, (error, train_stops) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else
        resolve(train_stops);
    })
  });
}

exports.getTrainStopsByTrain = train_route_id => {
  return new Promise((resolve, reject) => {
    train_stop_model.find({ 'stop_id' : { $regex: '^' + train_route_id, $options: 'i' } }, (error, train_stops) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else
        resolve(train_stops);
    })
  });
}
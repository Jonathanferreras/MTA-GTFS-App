const train_stop_model = require('../models/TrainStops.model');

exports.getAllTrainStops = () => {
  return new Promise((resolve, reject) => {
    train_stop_model.find({}, (error, train_stops) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else{
        // let filtered_train_routes = train_routes.filter(train_route => !train_route.route_id.includes("X"))
        // resolve(filtered_train_routes);
        resolve(train_stops)
      }
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
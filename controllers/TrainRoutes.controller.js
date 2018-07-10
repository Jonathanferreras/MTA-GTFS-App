const train_route_model = require('../models/TrainRoutes.model');

exports.getAllTrainRoutes = () => {
  return new Promise((resolve, reject) => {
    train_route_model.find({}, (error, train_routes) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else
        resolve(train_routes);
    })
  });
}

exports.getTrainRoute = train_route_id => {
  return new Promise((resolve, reject) => {
    train_route_model.findOne({ 'route_id' : train_route_id }, (error, train_route) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else
        resolve(train_route);
    })
  });
}
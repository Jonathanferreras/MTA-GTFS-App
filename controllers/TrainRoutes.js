const train_routes_model = require('../models/TrainRoutes.model');

exports.getAllTrainRoutes = () => {
  return new Promise((resolve, reject) => {
    train_routes_model.find({}, (error, train_routes) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else{
        let filtered_train_routes = train_routes.filter(train_route => !train_route.route_id.includes("X"))
        resolve(filtered_train_routes);
      }
    })
  });
}

exports.getTrainRoute = train_route_id => {
  return new Promise((resolve, reject) => {
    train_routes_model.findOne({ 'route_id' : train_route_id }, (error, train_route) => {
      if(error)
        console.log('An error has occurred, ' + error);
      else
        resolve(train_route);
    })
  });
}
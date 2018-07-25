const tripUpdate = require('../utils/tripUpdate');

exports.getAllTrainTrips = () => {
  return new Promise((resolve, reject) => {
    (async () => {

      let results = [];
      let trips = await tripUpdate();

      (trips.entity).forEach(train => {
        if(train.trip_update){
          results.push(train.trip_update);
        }
      });

      resolve(results);

    })();
  });
};

exports.getTrainTripsByTrain = train_route_id => {
  return new Promise((resolve, reject) => {
    (async () => {

      let results = [];
      let trips = await tripUpdate();

      (trips.entity).forEach(train => {
        if(train.trip_update){
          if(train.trip_update.trip.route_id[0] === train_route_id){
            results.push(train.trip_update);
          }
        }
      });

      resolve(results);

    })();
  })
};

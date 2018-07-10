const tripUpdate = require('../utils/tripUpdate');

exports.getAllTrainTrips = () => {
  return new Promise((resolve, reject) => {
    (async () => {

      let results = [];
      let trips = await tripUpdate.getUpdate();

      (trips.entity).forEach(train => {
        if(train.trip_update){
          results.push(train.trip_update);
        }
      });

      resolve(results);

    })();
  });
};

exports.getTrainTripsByTrain = route => {
  return new Promise((resolve, reject) => {
    //code here
  })
};
const tripUpdate = require('../utils/tripUpdate');

exports.getAllTrainGTFS = () => {
  return new Promise((resolve, reject) => {
    (async () => resolve(await tripUpdate()) )();
  });
};

// exports.getTrainGTFSByTrain = train_route_id => {
//   return new Promise((resolve, reject) => {
//     (async () => {

//       let results = [];
//       let trips = await tripUpdate(train_route_id);

//       (trips.entity).forEach(train => {
//         if(train.trip_update){
//           if(train.trip_update.trip.route_id[0] === train_route_id){
//             results.push(train.trip_update);
//           }
//         }
//       });
      
//       resolve(results);

//     })();
//   })
// };

const MtaGtfsRealtimeBindings = require('mta-gtfs-realtime-bindings');
const request = require('request');

const gtfs_config = require('../config/gtfsConfig');

exports.getTrainTrips = (train_line) => {
  return new Promise((resolve, reject) => {
    let settings = {
      method: 'GET',
      url: `http://datamine.mta.info/mta_esi.php?key=${gtfs_config.key}`,
      encoding: null,
    }

    let results = [];

    request(settings, (err, res, body) => {
      console.log('fetching...')
      if(err)
        console.log('Controller error: ' + err)


      let feed = MtaGtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
      feed.entity.forEach((train) => {
        if (train.trip_update){
          let trip_info = train.trip_update

          if (trip_info.trip.route_id == train_line || train_line.toLowerCase() === 'all'){
            results.push(trip_info);
          }
        } 
      });

      resolve(results); 
    });
  });
}
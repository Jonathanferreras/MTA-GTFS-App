const MtaGtfsRealtimeBindings = require('mta-gtfs-realtime-bindings');
const request = require('request');
let key;

if(process.env.NODE_ENV.trim() === 'production'){
  // uncomment if running app for production locally
  // require('dotenv').config();

  key = process.env.MTA_GTFS_API_KEY;
}
else {
  const mta_gtfs_config = require('../config/mtaGtfsConfig');
  key = mta_gtfs_config.MTA_GTFS_API_KEY;
}

const tripUpdate = () => {
  return new Promise((resolve, reject) => {
    let settings = {
      method: 'GET',
      url: `http://datamine.mta.info/mta_esi.php?key=${ key }`,
      encoding: null,
    }
    
    request(settings, (err, res, body) => {
      if(err)
        console.log('GTFS request failed: ' + err)
      else {
        let feed = MtaGtfsRealtimeBindings.transit_realtime.FeedMessage.decode(body);
        resolve(feed);
      }
    });
  });
}

module.exports = tripUpdate;
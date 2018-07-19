const MtaGtfsRealtimeBindings = require('mta-gtfs-realtime-bindings');
const request = require('request');

const gtfs_config = require('../config/mtaGtfsConfig');

exports.getUpdate = () => {
  return new Promise((resolve, reject) => {
    let settings = {
      method: 'GET',
      url: `http://datamine.mta.info/mta_esi.php?key=${gtfs_config.key}`,
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
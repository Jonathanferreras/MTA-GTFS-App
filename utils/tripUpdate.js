const MtaGtfsRealtimeBindings = require('mta-gtfs-realtime-bindings');
const request = require('request');
const feed_ids = require('../files/TrainFeed');
let key;

if(process.env.NODE_ENV.trim() === 'production'){
  key = process.env.MTA_GTFS_API_KEY;
}
else {
  const mta_gtfs_config = require('../config/mtaGtfsConfig');
  key = mta_gtfs_config.MTA_GTFS_API_KEY;
}

const getFeedIdByTrainRouteId = (feeds, train_route_id) => {
  return Object.keys(feeds).find(key => feeds[key].includes(train_route_id));
}

const tripUpdate = (train_route_id) => {
  return new Promise((resolve, reject) => {
    let get_feed_id = getFeedIdByTrainRouteId(feed_ids, train_route_id);
    let feed_id = get_feed_id ? `&feed_id=${ get_feed_id }` : ''

    let settings = {
      method: 'GET',
      url: `http://datamine.mta.info/mta_esi.php?key=${ key }${ feed_id }`,
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
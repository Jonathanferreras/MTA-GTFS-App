const MTA = require('mta-gtfs');
const gtfs_config = require('../config/gtfsConfig');

const mta_connect = new MTA({
  key: gtfs_config.key
})

exports.getTrainSchedule = async (req) => {
  try {
    let train_route = Number(req.params.train_route);

    let data = await mta_connect.schedule(train_route);
    return data;
  } 
  catch (error) {
    console.log(error);
  }

}
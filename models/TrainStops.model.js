const mongoose     = require('mongoose');
const mongo_config = require('../config/mongoConfig');

const uri = mongo_config.url + mongo_config.db.dev

mongoose.connect(uri, { useNewUrlParser: true });

const train_stops_schema = mongoose.Schema({
stop_id: String,
stop_code: String,
stop_name: String,
stop_desc: String,
stop_lat: String,
stop_lon: String,
zone_id: String,
stop_url: String,
location_type: String,
parent_station: String
});

module.exports = mongoose.model('train stops', train_stops_schema);
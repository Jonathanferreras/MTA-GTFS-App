const mongoose     = require('mongoose');
const mongo_config = require('../config/mongo.config');

mongoose.connect(`mongodb://127.0.0.1:27017/${ mongo_config.uri.local }`, { useNewUrlParser: true });

const train_stop_schema = mongoose.Schema({
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

module.exports = mongoose.model('train stops', train_stop_schema);
const mongoose = require('mongoose');
const mongo_config = require('../config/mongoConfig');
const file_convert = require('../helpers/fileConvert');

const stops = file_convert.csvToJson('files/stops.csv');

mongoose.connect(`mongodb://127.0.0.1:27017/${ mongo_config.uri.local }`, { useNewUrlParser: true });

const stop_schema = mongoose.Schema({
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

const stop_model = mongoose.model('train stops', stop_schema);

stops.forEach(stop => {
  stop_model.create(stop)
  .then(((err, stops) => {
    console.log(err, stops);
  }));
});
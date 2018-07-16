const mongoose     = require('mongoose');
const mongo_config = require('../config/mongo.config');

mongoose.connect(`mongodb://127.0.0.1:27017/${ mongo_config.uri.local }`, { useNewUrlParser: true });

const train_stops_schema = mongoose.Schema({
  Station_ID: String,
  Complex_ID: String,
  GTFS_Stop_ID: String,
  Division: String,
  Line: String,
  Stop_Name: String,
  Borough: String,
  Daytime_Routes: String,
  Structure: String,
  GTFS_Latitude: String,
  GTFS_Longitude: String
});

module.exports = mongoose.model('train stops', train_stops_schema);
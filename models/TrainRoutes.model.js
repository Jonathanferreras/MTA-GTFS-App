const mongoose     = require('mongoose');
const mongo_config = require('../config/mongoConfig');

const uri = mongo_config.url + mongo_config.db.dev

mongoose.connect(uri, { useNewUrlParser: true });

const train_routes_schema = mongoose.Schema({
  route_id: String,
  agency_id: String,
  route_short_name: String,
  route_long_name: String,
  route_desc: String,
  route_type: String,
  route_url: String,
  route_color: String,
  route_text_color: String
});

module.exports = mongoose.model('train routes', train_routes_schema);
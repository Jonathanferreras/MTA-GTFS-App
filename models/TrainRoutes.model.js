const mongoose = require('../utils/connectToDB');

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

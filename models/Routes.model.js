const mongoose = require('mongoose');
const mongo_config = require('../config/mongoConfig');
const file_convert = require('../helpers/fileConvert');

const routes = file_convert.csvToJson('files/routes.csv');

mongoose.connect(`mongodb://127.0.0.1:27017/${ mongo_config.uri.local }`, { useNewUrlParser: true });

const route_schema = mongoose.Schema({
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

const route_model = mongoose.model('train routes', route_schema);

routes.forEach(route => {
  route_model.create(route)
  .then(((err, routes) => {
    console.log(err, routes);
  }));
});
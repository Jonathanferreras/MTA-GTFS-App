const mongoose = require('mongoose');
const mongo_config = require('../config/mongoConfig');

mongoose.connect(`mongodb://127.0.0.1:27017/${ mongo_config.uri.local }`, { useNewUrlParser: true });

var TestSchema = mongoose.Schema({
  item: String,
  value: Boolean
});

var Test = mongoose.model('test', TestSchema);

Test.create({
  item: 'This is a test!',
  value: true
})
.then(((err, test) => {
  console.log(err, test);
}));
const mongoose = require('mongoose');
let uri, db;

if(process.env.NODE_ENV.trim() === 'production'){
  // uncomment if running app for production locally
  // require('dotenv').config();
  
  db = process.env.MONGODB_DATABASE;
  uri = process.env.MONGODB_URI + db;
}
else {
  const mongo_config = require('../config/mongoConfig');

  db = mongo_config.MONGODB_DATABASE;
  uri = mongo_config.MONGODB_URI + db;
}

(() => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true });
    console.log(`Connected to: ${ uri }\n`)
  } 
  catch (error) {
    console.log('Error occurred when attempting to connect to database: ' + error);
    return false;
  }
})();

module.exports = mongoose;
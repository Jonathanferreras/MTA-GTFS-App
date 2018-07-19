const mongoose     = require('mongoose');
const mongo_config = require('../config/mongoConfig');

const mode = process.env.NODE_ENV.trim() === 'production';

const url = mode ? mongo_config.prod.url : mongo_config.dev.url;
const database = mode ? mongo_config.prod.db : mongo_config.dev.db

const uri = url + database;

exports.connectToDB = () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true });
    console.log(`Connected to: ${ uri }!\n`)
    return mongoose;
  } 
  catch (error) {
    console.log('Error occurred when attempting to connect to database: ' + error);
    return false;
  }
}
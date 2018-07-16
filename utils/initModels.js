const convert_file      = require('../utils/convertFile');
const train_stops_model  = require('../models/TrainStops.model');
const train_routes_model = require('../models/TrainRoutes.model');

const train_stops  = convert_file.csvToJson('files/TrainStops.csv');
const train_routes = convert_file.csvToJson('files/TrainRoutes.csv');

const createCollection = (entries, model) => {
  try {
    console.log(`Creating collection: ${model.collection.collectionName}`);
    entries.forEach( entry => model.create(entry) );    
  } 
  catch (error) {
    console.log('Error occurred: ' + error);
  }
  finally {
    console.log('Done!');
  }
}

createCollection(train_stops, train_stops_model);
createCollection(train_routes, train_routes_model);

console.log('Hit ctrl + c to exit');   
const log = console.log
const convert_file      = require('../utils/convertFile');
// const train_stop_model  = require('../TrainStops/TrainStops.model');
const train_route_model = require('../TrainRoutes/TrainRoutes.model');

// const train_stops  = convert_file.csvToJson('TrainStops/TrainStops.csv');
const train_routes = convert_file.csvToJson('TrainRoutes/TrainRoutes.csv');

const createCollection = (entries, model) => {
  try {
    log(`Creating collection: ${model.collection.collectionName}`)
    entries.forEach( entry => model.create(entry) )    
  } 
  catch (error) {
    log('Error occurred: ' + error)
  }
  finally {
    log('Done!')
  }
}

// createCollection(train_stops, train_stop_model);
createCollection(train_routes, train_route_model);

log('Hit ctrl + c to exit');   
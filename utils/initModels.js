const convert_file      = require('../utils/convertFile');
const train_stops_model  = require('../models/TrainStops.model');
const train_routes_model = require('../models/TrainRoutes.model');

const train_stops  = convert_file.csvToJson('files/TrainStops.csv');
const train_routes = convert_file.csvToJson('files/TrainRoutes.csv');

const createCollection = async (entries, model) => {
  try {
    let collection_name = model.collection.collectionName
    let collectionExists = Object.keys(model.db.collections).includes(collection_name);

    if(collectionExists)
      await model.remove({}, () => console.log(`Collection ${ collection_name } was dropped`));

    console.log(`Creating collection: ${ collection_name }`);
    entries.forEach( entry => model.create(entry) ); 
  } 
  catch (error) {
    console.log('Error occurred: ' + error);
  }
  finally {
    console.log('Done!' + '\n');
  }
}

(async() => {
  await createCollection(train_stops, train_stops_model);
  await createCollection(train_routes, train_routes_model);  
  await console.log('Hit ctrl + c to exit');
})();
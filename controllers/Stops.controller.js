const stop_model = require('../models/Stops.model');
const query = stop_model.find();
query.collection(stop_model.collection)

let result = query.$where('stop_id === 101');
console.log(result);
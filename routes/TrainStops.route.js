const express = require('express');
const router = express.Router();

const controller = require('../controllers/TrainStops.controller');

router.get('/', async(req, res, next) => {
  try {
    const train_stops = await controller.getAllTrainStops();
    res.status(200).send(train_stops)    
  } 
  catch (error) {
    console.log('An error occurred while getting all train stops, Error: ' + error)
    res.status(500).send()    
  }
});

router.get('/:train_route_id', async(req, res, next) => {
  try {
    const train_stops = await controller.getTrainStopsByTrain(req.params.train_route_id);
    res.status(200).send(train_stops)    
  } 
  catch (error) {
    console.log('An error occurred while getting train stops, Error: ' + error)
    res.status(500).send()    
  }
});

module.exports = router;
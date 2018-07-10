const express = require('express');
const router = express.Router();

const controller = require('../controllers/TrainTrips.controller');

router.get('/', async(req, res, next) => {
  try {
    const train_trips = await controller.getAllTrainTrips();
    res.status(200).send(train_trips)    
  } 
  catch (error) {
    console.log('An error occurred while getting all train trips, Error: ' + error)
    res.status(500).send()    
  }
});

router.get('/:train', async(req, res, next) => {
  try {
    const train_trips = await controller.getTrainTripsByTrain(req.params.route);
    res.status(200).json(train_trips)    
  } 
  catch (error) {
    console.log('An error occurred while getting train trips, Error: ' + error)
    res.status(500).send()    
  }
});

module.exports = router;
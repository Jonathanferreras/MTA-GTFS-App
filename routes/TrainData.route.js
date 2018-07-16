const express = require('express');
const router = express.Router();

const controller = require('../controllers/TrainData.controller');

router.get('/', async(req, res, next) => {
  try {
    const train_routes = await controller.getAllTrainData();
    res.status(200).send(train_routes)    
  } 
  catch (error) {
    console.log('An error occurred while getting all train routes, Error: ' + error)
    res.status(500).send()    
  }
});

router.get('/:train_route_id', async(req, res, next) => {
  try {
    const train_route = await controller.getTrainData(req.params.train_route_id);
    res.status(200).send(train_route)    
  } 
  catch (error) {
    console.log('An error occurred while getting train route, Error: ' + error)
    res.status(500).send()    
  }
});

module.exports = router;
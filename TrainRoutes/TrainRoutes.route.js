const express = require('express');
const router = express.Router();

const controller = require('../TrainRoutes/TrainRoutes.controller');

router.get('/', async(req, res, next) => {
  try {
    const train_routes = await controller.getAllTrainRoutes();
    res.status(200).send(train_routes)    
  } 
  catch (error) {
    console.log('An error occurred while getting train routes, Error: ' + error)
    res.status(500).send()    
  }
});

router.get('/:route', async(req, res, next) => {
  try {
    const train_route = await controller.getTrainRoute(req.params.route);
    res.status(200).json(train_route)    
  } 
  catch (error) {
    console.log('An error occurred while getting train route, Error: ' + error)
    res.status(500).send()    
  }
});

module.exports = router;
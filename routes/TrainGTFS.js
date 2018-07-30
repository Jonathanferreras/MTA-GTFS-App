const express = require('express');
const router = express.Router();

const controller = require('../controllers/TrainGTFS');

router.get('/', async(req, res, next) => {
  try {
    const train_trips = await controller.getAllTrainGTFS();
    res.status(200).send(train_trips)    
  } 
  catch (error) {
    console.log('An error occurred while getting all train GTFS, Error: ' + error)
    res.status(500).send()    
  }
});

// router.get('/:train_route_id', async(req, res, next) => {
//   try {
//     const train_trips = await controller.getTrainGTFSByTrain(req.params.train_route_id);
//     res.status(200).json(train_trips)    
//   } 
//   catch (error) {
//     console.log('An error occurred while getting train GTFS, Error: ' + error)
//     res.status(500).send()    
//   }
// });

module.exports = router;
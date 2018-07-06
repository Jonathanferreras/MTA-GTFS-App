const express = require('express');
const router = express.Router();

const train_trips_controller = require('../controllers/trainTrips.controller');

router.get('/:train_line', async (req, res, next) => {
  let train_trips = await train_trips_controller.getTrainTrips(req.params.train_line);

  res.status(200).send(train_trips);
})

module.exports = router;
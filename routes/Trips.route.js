const express = require('express');
const router = express.Router();

const trips_controller = require('../controllers/Trips.controller');

router.get('/:train_line', async (req, res, next) => {
  let train_trips = await trips_controller.getTrainTrips(req.params.train_line);

  res.status(200).send(train_trips);
})

module.exports = router;
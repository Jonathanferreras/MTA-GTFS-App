const express = require('express');
const train_trips_controller = require('../controllers/trainTripsController');

const router = express.Router();


// router.get('/:train_route', async (req, res, next) => {
//   let train_schedule = await ts_controller.getTrainSchedule(req);
//   console.log(train_schedule);

//   res.status(200).send(train_schedule);
// })

router.get('/:train_line', async (req, res, next) => {
  let train_schedule = await train_trips_controller.getTrainTrips(req.params.train_line);

  res.status(200).send(train_schedule);
})

module.exports = router;
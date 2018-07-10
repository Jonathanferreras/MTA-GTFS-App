const express = require('express');
const router = express.Router();

const stops_controller = require('../controllers/Stops.controller');

router.get('test', async(req, res, next) => {
  let x = await stops_controller.getTrainStops();

  res.status(200).send(x);
});

module.exports = router;
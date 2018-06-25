const express = require('express');
const ts_controller = require('../controllers/tsController');

const router = express.Router();


router.get('/:train_route', async (req, res, next) => {
  let train_schedule = await ts_controller.getTrainSchedule(req);
  console.log(train_schedule);

  res.status(200).send(train_schedule);
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    let GOOGLE_MAPS_API_KEY;

    if(process.env.NODE_ENV.trim() === 'production'){
      GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
    }
    else {
      const google_maps_config = require('../config/googleMapsConfig');

      GOOGLE_MAPS_API_KEY = google_maps_config.GOOGLE_MAPS_API_KEY
    }

    res.status(200).send({ key:GOOGLE_MAPS_API_KEY });    
  } 
  catch (error) {
    console.log('An error occurred while getting google maps api key, Error: ' + error);
    res.status(500).send();
  }
});

module.exports = router;
import { FETCH_TRAIN_TRIPS } from '../constants/types';

export const fetchTrainTrips = (train_line) => dispatch => {
  let url = `/api/trainTrips/${train_line}`;
  console.log(`GET - ${url}`);

  fetch(url)
  .then(res => res.json())
  .then(data => 
    dispatch({
      type: FETCH_TRAIN_TRIPS,
      payload: data
    })
  );
};



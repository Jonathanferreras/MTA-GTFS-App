import { FETCH_TRAIN_TRIPS } from '../constants/types';
// import { fetchTrainTrips } from '../modules/fetchTrainTrips';

// export const trainTrips = (train_line) => {
//   return {
//     type: FETCH_TRAIN_TRIPS,
//     payload: fetchTrainTrips(train_line)
//   };
// };

export const fetchTrainTrips = (train_line) => dispatch => {
  console.log('fetching')
  fetch(`/api/trainTrips/${train_line}`)
  .then(res => res.json())
  .then(data => 
    dispatch({
      type: FETCH_TRAIN_TRIPS,
      payload: data
    })
  );
};



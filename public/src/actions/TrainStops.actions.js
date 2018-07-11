import { FETCH_TRAIN_STOPS } from '../constants/types';

export const fetchTrainStops = (route_id) => dispatch => {
  let url = `/api/TrainStops/${ route_id }`;
  console.log('here');
  fetch(url)
  .then(res => res.json())
  .then(data => 
    dispatch({
      type: FETCH_TRAIN_STOPS,
      payload: data
    })
  );
};



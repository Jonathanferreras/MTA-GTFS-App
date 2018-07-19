import { FETCH_TRAIN_TRIPS } from '../constants/types';

export const fetchTrainTrips = (route_id) => dispatch => {
  let url = `/api/TrainTrips/${ route_id }`;

  fetch(url)
  .then(res => res.json())
  .then(data => 
    dispatch({
      type: FETCH_TRAIN_TRIPS,
      payload: data
    })
  );
};

import { FETCH_TRAIN_ROUTES } from '../constants/types';

export const fetchTrainRoutes = () => dispatch => {
  let url = '/api/TrainRoute';

  fetch(url)
  .then(res => res.json())
  .then(data => 
    dispatch({
      type: FETCH_TRAIN_ROUTES,
      payload: data
    })
  );
};



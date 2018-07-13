import { FETCH_SELECTED_TRAIN_ROUTE } from '../constants/types';

export const fetchSelectedTrainRoute = (train_route) => {
  console.log(train_route);
  return {
    type: FETCH_SELECTED_TRAIN_ROUTE,
    payload: train_route
  };
};
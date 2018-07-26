import { FIND_SELECTED_TRAIN_ROUTE } from '../../constants/types';

export const findSelectedTrainRoute = (train_route) => {
  return {
    type: FIND_SELECTED_TRAIN_ROUTE,
    payload: train_route
  };
};
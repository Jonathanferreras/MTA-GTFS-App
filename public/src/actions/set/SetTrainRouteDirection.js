import { SET_TRAIN_ROUTE_DIRECTION } from '../../constants/types';

export const setTrainRouteDirection = (direction) => {
  return {
    type: SET_TRAIN_ROUTE_DIRECTION,
    payload: direction
  };
};
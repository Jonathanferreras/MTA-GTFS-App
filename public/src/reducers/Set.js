import { SET_TRAIN_ROUTE_DIRECTION } from '../constants/types';

const initialState = {
  train_route_direction: 'S'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_TRAIN_ROUTE_DIRECTION:
      return { ...state, train_route_direction: action.payload };
      
    default:
      return state;
  }
}
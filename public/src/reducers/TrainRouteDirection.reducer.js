import { SET_TRAIN_ROUTE_DIRECTION } from '../constants/types';

const initialState = 'N';

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_TRAIN_ROUTE_DIRECTION:
      return state = action.payload;
      
    default:
      return state;
  }
}
import { FETCH_TRAIN_STOPS } from '../constants/types';

const initialState = {
  train_stops: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRAIN_STOPS:
      return state.train_stops = action.payload;
      
    default:
      return state;
  }
}
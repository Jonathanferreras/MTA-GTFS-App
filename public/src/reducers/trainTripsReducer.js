import { FETCH_TRAIN_TRIPS } from '../constants/types';

const initialState = {
  train_trips: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRAIN_TRIPS:
      return state.train_trips = action.payload;
      
    default:
      return state;
  }
}
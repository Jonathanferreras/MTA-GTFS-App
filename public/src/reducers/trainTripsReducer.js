import { FETCH_TRAIN_TRIPS } from '../constants/types';

const initialState = {
  train_trips: ['no data yet']
};

export default function(state = initialState, action) {
  console.log('current state: '    + JSON.stringify(state.train_trips) + 
              ' current action: '  + action.type + 
              ' current payload: ' + JSON.stringify(action.payload));
  switch(action.type) {
    case FETCH_TRAIN_TRIPS:
      return state.train_trips = action.payload;
      
    default:
      return state;
  }
}
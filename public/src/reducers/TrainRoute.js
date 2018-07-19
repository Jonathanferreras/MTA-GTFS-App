import { FETCH_SELECTED_TRAIN_ROUTE } from '../constants/types';

const initialState = {
  train_route: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SELECTED_TRAIN_ROUTE:
      return state.train_route = action.payload;
      
    default:
      return state;
  }
}
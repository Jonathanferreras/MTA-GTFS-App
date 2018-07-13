import { FETCH_TRAIN_ROUTES, FETCH_SELECTED_TRAIN_ROUTE } from '../constants/types';

const initialState = {
  train_routes: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRAIN_ROUTES:
      return state.train_routes = action.payload;
      
    default:
      return state;
  }
}
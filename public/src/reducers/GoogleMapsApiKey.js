import { FETCH_GOOGLE_MAPS_API_KEY } from '../constants/types';

const initialState =  '';

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_GOOGLE_MAPS_API_KEY:
      return state = action.payload.key;
      
    default:
      return state;
  }
}
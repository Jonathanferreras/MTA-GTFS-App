import { 
  FETCH_TRAIN_ROUTES,
  FETCH_TRAIN_STOPS,
  FETCH_TRAIN_TRIPS,
  FETCH_GOOGLE_MAPS_API_KEY,
} from '../constants/types';

const initialState =  {
  train_routes: [],
  train_trips: [],
  train_stops: [],
  google_maps_api_key: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRAIN_ROUTES:
      return { ...state, train_routes: action.payload };

    case FETCH_TRAIN_STOPS:
      return { ...state, train_stops: action.payload };

    case FETCH_TRAIN_TRIPS:
      return { ...state, train_trips: action.payload };

    case FETCH_GOOGLE_MAPS_API_KEY:
      return { ...state, google_maps_api_key: action.payload.key };
      
    default:
      return state;
  }
}
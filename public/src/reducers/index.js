import { combineReducers } from 'redux';
import FetchReducer from './Fetch';
import FindReducer from './Find';
import SetReducer from './Set';
// import TrainTripsReducer from './TrainTrips';
// import TrainRoutesReducer from './TrainRoutes';
// import TrainRouteReducer from './TrainRoute';
// import TrainStopsReducer from './TrainStops';
// import TrainRouteDirectionReducer from './TrainRouteDirection';
// import GoogleMapsAPiKeyReducer from './GoogleMapsApiKey';

export default combineReducers({
  fetch: FetchReducer,
  find: FindReducer,
  set: SetReducer,
  // train_trips: TrainTripsReducer,
  // train_routes: TrainRoutesReducer,
  // train_route: TrainRouteReducer,
  // train_stops: TrainStopsReducer,
  // train_route_direction: TrainRouteDirectionReducer,
  // GOOGLE_MAPS_API_KEY: GoogleMapsAPiKeyReducer
});
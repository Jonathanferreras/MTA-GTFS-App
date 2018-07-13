import { combineReducers } from 'redux';
import TrainTripsReducer from './TrainTrips.reducer';
import TrainRoutesReducer from './TrainRoutes.reducer';
import TrainRouteReducer from './TrainRoute.reducer';
import TrainStopsReducer from './TrainStops.reducer';

export default combineReducers({
  train_trips: TrainTripsReducer,
  train_routes: TrainRoutesReducer,
  train_route: TrainRouteReducer,
  train_stops: TrainStopsReducer,
});
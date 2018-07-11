import { combineReducers } from 'redux';
import TrainTripsReducer from './TrainTrips.reducer';
import TrainRoutesReducer from './TrainRoutes.reducer';

export default combineReducers({
  train_trips: TrainTripsReducer,
  train_routes: TrainRoutesReducer
});
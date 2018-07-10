import { combineReducers } from 'redux';
import trainTripsReducer from './trainTripsReducer';
import TrainRoutesReducer from './TrainRoutes.reducer';

export default combineReducers({
  train_trips: trainTripsReducer,
  train_routes: TrainRoutesReducer
});
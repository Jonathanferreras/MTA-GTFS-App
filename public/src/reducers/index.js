import { combineReducers } from 'redux';
import trainTripsReducer from './trainTripsReducer';

export default combineReducers({
  train_trips: trainTripsReducer
});
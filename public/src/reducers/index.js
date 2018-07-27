import { combineReducers } from 'redux';
import FetchReducer from './Fetch';
import FindReducer from './Find';
import SetReducer from './Set';

export default combineReducers({
  fetch: FetchReducer,
  find: FindReducer,
  set: SetReducer
});
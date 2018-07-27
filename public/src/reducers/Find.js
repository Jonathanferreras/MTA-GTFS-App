import moment from 'moment';

import { 
  FIND_SELECTED_TRAIN_ROUTE,
  FIND_CURRENT_TIME_STAMP, 
} from '../constants/types';

const initialState = {
  train_route: {},
  current_time_stamp: moment().format('LTS')
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FIND_SELECTED_TRAIN_ROUTE:
      return { ...state, train_route: action.payload };

    case FIND_CURRENT_TIME_STAMP:
      return { ...state, current_time_stamp: action.payload };
      
    default:
      return state;
  }
}
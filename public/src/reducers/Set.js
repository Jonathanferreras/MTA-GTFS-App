import { 
  SET_TRAIN_ROUTE_DIRECTION,
  SET_CLOCK_TIME, 
} from '../constants/types';

const initialState = {
  train_route_direction: 'S',
  clock_time: '',
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_TRAIN_ROUTE_DIRECTION:
      return { ...state, train_route_direction: action.payload };
      
    case SET_CLOCK_TIME:
      return { ...state, clock_time: action.payload };

    default:
      return state;
  }
}
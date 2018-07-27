import { SET_CLOCK_TIME } from '../../constants/types';
import moment from 'moment';

export const setClockTime = () => {
  return {
    type: SET_CLOCK_TIME,
    payload: moment().format('LTS')
  };
};
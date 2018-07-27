import { FIND_CURRENT_TIME_STAMP } from '../../constants/types';

export const findCurrentTimeStamp = (time_stamp) => {
  return {
    type: FIND_CURRENT_TIME_STAMP,
    payload: time_stamp
  };
};
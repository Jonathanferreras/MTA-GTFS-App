import moment from 'moment';

export const convertEpochToDate = (val) => { 
  return (val !== "" ? moment.unix(val).format('h:mm:ss A') : val); 
};
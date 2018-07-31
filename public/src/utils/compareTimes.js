import moment from 'moment';

export const compareTimes = (time1, time2) => {

  let format = 'HH:mm';
  let current = moment(moment().format('LTS'), format);
  let start = moment(time1 ,format);
  let end = moment(time2, format);

  let duration = moment.duration(end.diff(start));

  return `${ moment.utc(+duration).format('m') } mins`; 
};
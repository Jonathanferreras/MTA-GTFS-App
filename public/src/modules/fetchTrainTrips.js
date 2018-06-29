import { callApi } from './callApi';

export const fetchTrainTrips = (train_line) => {
  return callApi(`/api/trainTrips/${train_line}`);
};


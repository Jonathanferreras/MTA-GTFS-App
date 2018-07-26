import { FETCH_GOOGLE_MAPS_API_KEY } from '../../constants/types';

export const fetchGMapsApiKey = () => dispatch => {
  let url = '/api/GoogleMapsApiKey';

  fetch(url)
  .then(res => res.json())
  .then(GOOGLE_MAPS_API_KEY => 
    dispatch({
      type: FETCH_GOOGLE_MAPS_API_KEY,
      payload: GOOGLE_MAPS_API_KEY
    })
  );
};
import React from 'react';
import { Button } from 'reactstrap';


const TrainRouteButton = (value) => {
  const Style = {
    backgroundColor: `#${ value.color }`
  };

  return (
    <Button onClick={ value.onClick } className="train-route-btn" style = { Style }>{ value.id }</Button>
  );
};

export default TrainRouteButton;

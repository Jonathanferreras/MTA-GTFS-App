import React from 'react';
import { Button } from 'reactstrap';

const TrainRouteButton = (Props) => {
  const Style = {
    backgroundColor: `#${Props.color}`
  };

  return (
    <Button title={`${Props.id} Train`} 
      onClick={ Props.onClick } 
      className="train-route-btn" 
      style={ Style }
      >{ Props.id }
    </Button>
  );
};

export default TrainRouteButton;

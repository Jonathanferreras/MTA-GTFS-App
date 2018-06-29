import React, { Component, Fragment } from 'react';

export default class TrainStop extends Component {
  constructor(props){
    super(props);

    this.state = {
      current_train: '',
      arriving_train_eta: '',
      departing_train_eta: ''
    };
  }
  render() {
    return (
      <Fragment>
        {
          <li className="train-stop">
          
          </li>
        }
      </Fragment>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';

import { setTrainRouteDirection } from '../../actions/set';

class TrainRouteDirection extends Component {
  constructor(props){
    super(props);

    this.state = {
      isActive: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState({ isActive: !this.state.isActive });
    this.props.setTrainRouteDirection(e.target.id);
  }

  render() {

    return (
      <ButtonGroup className="train-route-direction">
        <Button onClick={ this.handleClick } id="S" active={ this.state.isActive } outline color="info">{ "N -> S" }</Button>
        <Button onClick={ this.handleClick } id="N"  active={ !this.state.isActive } outline color="info">{ "S -> N" }</Button>
      </ButtonGroup>
    );
  }
}

TrainRouteDirection.propTypes = {
  setTrainRouteDirection: PropTypes.func
};

const mapStateToProps = state => ({
  train_route_direction: state.set.train_route_direction
});

export default connect(mapStateToProps, { setTrainRouteDirection })(TrainRouteDirection);



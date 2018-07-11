import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container, Collapse, Button } from 'reactstrap';

import TrainRouteButton from '../TrainRouteButton/TrainRouteButton';
import { fetchTrainRoutes, fetchTrainTrips } from '../../actions';

class TrainRouteSelector extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  componentDidMount(){
    this.props.fetchTrainRoutes();
  }

  toggle = () => {
    console.log('toggle: ' + this.state.collapse);
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const generate_train_routes = (train_routes) => {
      if(train_routes.length > 0){
        return(
          train_routes.map((train_route, index) => {
            return <TrainRouteButton
                    onClick={() => {
                      this.toggle;
                      this.props.fetchTrainTrips(train_route.route_id); 
                    }}
                    key = {index.toString()}
                    color = { train_route.route_color }
                    id = { train_route.route_id }
            />;
          })
        );
      }
      else {
        return <span>No routes available.</span>;
      }
    };

    const generate_train_trips = (train_trips) => {
      if (train_trips.length > 0) {
        return <span>Found trips.</span>;
      } else {
        return <span>No trips available.</span>;
      }
    };

    return (
      <Fragment>
        <Button outline color="info" onClick={ this.toggle } style={{ marginBottom: '1rem' }}>Select a Route</Button>
        <Container>
          <div className="train-route-selector">
            <Collapse isOpen={this.state.collapse}>
              <Container>
                <p> { generate_train_routes(this.props.train_routes) } </p>
              </Container>        
            </Collapse>
          </div>
        </Container>
        { generate_train_trips(this.props.train_trips) }
      </Fragment>
    );
  }
}

TrainRouteSelector.propTypes = {
  fetchTrainRoutes: PropTypes.func,
  fetchTrainTrips: PropTypes.func,
  train_routes: PropTypes.array,
  train_trips: PropTypes.array,
};

const mapStateToProps = state => ({
  train_routes: state.train_routes,
  train_trips: state.train_trips
});

export default connect(mapStateToProps, { fetchTrainRoutes, fetchTrainTrips })(TrainRouteSelector);

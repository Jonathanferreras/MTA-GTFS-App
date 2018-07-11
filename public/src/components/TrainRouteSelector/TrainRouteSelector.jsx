import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Container, Collapse, Button } from 'reactstrap';

import TrainRouteButton from '../TrainRouteButton/TrainRouteButton';
import TrainRoute from '../TrainRoute/TrainRoute';
import { fetchTrainRoutes, fetchTrainTrips } from '../../actions';

class TrainRouteSelector extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false, 
      selected_route: { 
        id: '', 
        color: '',
        bool: false,
      } 
    };
  }

  componentDidMount(){
    this.props.fetchTrainRoutes();
  }

  toggle = () => { 
    this.setState({ collapse: !this.state.collapse }); 
  }

  render() {
    const trainRoutes = (train_routes) => {
      if(train_routes.length > 0){
        return(
          train_routes.map((train_route, index) => {
            return <TrainRouteButton
              onClick={() => {
                // this.props.fetchTrainTrips(train_route.route_id);

                /* if route doesn't have color then default to gray */
                if(train_route.route_color == "")
                  train_route.route_color = '6c757d';

                this.setState({selected_route: {
                  id: train_route.route_id,
                  color: train_route.route_color,
                  bool: true,
                }});
                this.toggle();
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

    // const generateTrainTrips = (train_trips) => {
    //   if (train_trips.length > 0) {
    //     return(
    //       train_trips.map((train_trip, index) => {
    //         return <span key={index.toString()}>
    //           Train Trip ID: { train_trip.trip.trip_id } <br/>
    //           Train Stop IDs: { train_trip.stop_time_update.map(stop => stop.stop_id) }<br/>
    //         </span>;
    //       })
    //     );

    //   } 
    //   else {
    //     return <span>No trips available.</span>;
    //   }
    // };


    return (
      <Fragment>
        <Button outline color="info" onClick={ this.toggle } style={{ margin: '1rem 0' }}>Select a Route</Button>
        <Container>
          <div className="train-route-selector">
            <Collapse isOpen={this.state.collapse}>
              <Container>
                <p> { trainRoutes(this.props.train_routes) } </p>
              </Container>        
            </Collapse>
          </div>
        </Container>
        <hr/>
        <TrainRoute 
          route_id={this.state.selected_route.id}
          route_color={this.state.selected_route.color}
        />
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

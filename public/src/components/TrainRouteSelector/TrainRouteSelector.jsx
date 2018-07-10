import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';

import { fetchTrainRoutes } from '../../actions/TrainRoutes.actions';

class TrainRouteSelector extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let new_data = this.props.fetchTrainRoutes();
    this.setState(({ data: new_data}));
  }

  render() {
    const generate_train_routes = (train_routes) => {
      if(train_routes.length > 0){
        return(
          train_routes.map((train_route, index) => {
            return <Button style={ {backgroundColor: `#${train_route.route_color}`} } className="train-route" key={ index.toString() }>{ train_route.route_id }</Button>;
          })
        );
      }
      else {
        return <span>No routes available.</span>;
      }
    };

    return (
      <div className="train-route-selector">
        <ButtonGroup>
          { generate_train_routes(this.props.train_routes) }
        </ButtonGroup>
      </div>
    );
  }
}

TrainRouteSelector.propTypes = {
  fetchTrainRoutes: PropTypes.func,
  train_routes: PropTypes.array
};

const mapStateToProps = state => ({
  train_routes: state.train_routes
});

// export default App;
export default connect(mapStateToProps, { fetchTrainRoutes })(TrainRouteSelector);

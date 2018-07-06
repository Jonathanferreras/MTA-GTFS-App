import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Moment from 'moment';
import { Jumbotron, Container } from 'reactstrap';

import { _Navbar } from './components';
import { TRAIN_STOPS } from './constants';
import { fetchTrainTrips } from './actions/trainTripsActions';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      response: '',
      n_times: 0,
      current_time: '',
      train_line: '6'
    };
  }

  componentDidMount(){
    const min = 60000; //minute

    setInterval(() => this.setState({ current_time: Moment().format('LTS') }), 100);
    this.props.fetchTrainTrips(this.state.train_line);

    setInterval(() => {
      let data = this.props.fetchTrainTrips(this.state.train_line);

      if (!(this.state.response, data)){
        console.log('updating');
        this.setState({ 
          n_times: this.state.n_times + 1 
        });

        console.log('called api ' + this.state.n_times + ' times');
      }

    }, (min / 2));
  }

  convertEpochToTime = (epoch) => {
    if(epoch !== null){
      return Moment.unix(epoch).format('dddd, MMMM Do, YYYY h:mm:ss A');
    }

    return epoch;
  }

  render(){
    return(
      <Fragment>
        <_Navbar />
        <div className="content">
          <h2>{this.state.current_time}</h2><br/>
          <h1>Updated: { this.state.n_times }</h1><br/>


        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  fetchTrainTrips: PropTypes.func,
  train_trips: PropTypes.array
};

const mapStateToProps = state => ({
  train_trips: state.train_trips
});

// export default App;
export default connect(mapStateToProps, { fetchTrainTrips })(App);
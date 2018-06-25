import React, { Component, Fragment } from 'react';
import Moment from 'moment';
import { 
  Jumbotron,
  Container 
  } from 'reactstrap';

import { _Navbar } from './components';
import { TRAIN_STOPS } from './constants';
const train_stop = TRAIN_STOPS['Parkchester'];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      response: '',
      n_times: 0
    };
  }

  componentDidMount(){
    const min = 60000; //minute

    this.callApi()
    .then(res => res.json())
    .then(res => this.setState({ response: res.schedule[train_stop] }));

    setInterval(() => {
      this.callApi()
      .then(res => res.json())
      .then(res => {
        let data = res.schedule[train_stop];

        if (!(this.checkIfSame(this.state.response, data))){
          console.log('updating');
          this.setState({ response: res.schedule[train_stop] });
        }
      })
      .then(this.setState({ n_times: this.state.n_times + 1 }))
      .then(console.log('called api ' + this.state.n_times + ' times'))
      .catch(err => console.log(err));
    },
    min);
  }

  checkIfSame = (a, b) => {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;

        }
    }
    
    return true;
  }

  callApi = async () => {
    const response = await fetch(`/api/trainSchedule/${train_stop}`);
    return response;
  }

  convertEpochToTime = (epoch) => {
    if(epoch !== null){
      return Moment.unix(epoch).format('dddd, MMMM Do, YYYY h:mm:ss A');
    }

    return epoch;
  }

  render(){
    const trainData = (direction, train_stop) => {
      if(this.state.response){
        return this.state.response[direction].map((train, index) => {
          return <li key={ index.toString() } className="train-ETA">
          Train type: { train.routeId } <br/>
            Arrival time: <span className="arrival-time">{ JSON.stringify(this.convertEpochToTime(train.arrivalTime)) }</span> <br/>
            Departure time: <span className="departure-time">{ JSON.stringify(this.convertEpochToTime(train.departureTime)) }</span> <br/> 
          Delay: { JSON.stringify(train.delay) } </li>;          
        });
      }
      else {
        return '';
      }
    };
    return(
      <Fragment>
        <_Navbar />
        <div className="content">
          <h1>Parkchester | Updated: { this.state.n_times }</h1><br/>
          <div className="trainSchedule">
            <div>
              <h2>Northbound Trains</h2>
              <ul className="train-ETA-list"> { trainData('N') } </ul>
            </div>
            <div>
              <h2>Sounthbound Trains</h2>
              <ul className="train-ETA-list"> { trainData('S') } </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
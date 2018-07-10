import React, { Component, Fragment } from 'react';
import Moment from 'moment';
import { Nav, TrainRouteSelector } from './components';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      current_time: '',
    };
  }

  componentDidMount(){
    setInterval(() => this.setState({ current_time: Moment().format('LTS') }), 100);
  }

  render(){
    return(
      <Fragment>
        <Nav />
        <div className="content">
          <h2>{this.state.current_time}</h2><br/>
          <TrainRouteSelector/>
        </div>
      </Fragment>
    );
  }
}

// export default App;
export default App;
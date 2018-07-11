import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { Nav, TrainRouteSelector, Clock } from './components';

class App extends Component {
  render(){
    return(
      <Fragment>
        <Nav />
        <div className="content">
          <Container>
            <Clock/>
            <br/>
            <TrainRouteSelector/>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
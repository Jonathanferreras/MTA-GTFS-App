import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { 
  Nav, 
  Clock,
  TrainRouteSelector,
  TrainRoute,
  Map  
} from './components';
import TrainRouteLine from './components/TrainRoute/TrainRouteLine';

class App extends Component {
  render(){
    const Style = {
      display: "flex", 
      alignItems: "center",
      flexDirection: "column"
    };

    return(
      <Fragment>
        <Nav />
        <div className="content">
          <Container>
            <Clock/>
            <br/>
            <TrainRouteSelector/>
            <TrainRouteLine />
            <Row>
              <Col style={ Style }>
                <Map />
              </Col>
              <Col style={ Style } xs="12" md="6">
                <TrainRoute />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { 
  Nav, 
  Clock,
  TrainRouteSelector,
  TrainRoute,
  Map  
} from './components';

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
            <Row>
              <Col style={ Style }>
                <h2><strong>Train Stop Locations</strong></h2>
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
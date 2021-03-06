import React, { Component, Fragment } from 'react';
import { Container, Collapse, Button } from 'reactstrap';

import TrainRouteButtons from './TrainRouteButtons';

export default class TrainRouteSelector extends Component {
  constructor(props){
    super(props);

    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse }); 
  }

  render() {
    return (
      <Fragment>
        <div className="train-route-selector-container">
          <Button className="selector-toggle-btn" outline color="info" onClick={ this.toggle }>Select a route</Button>
          <Container>
            <div className="train-route-selector">
              <Collapse isOpen={ this.state.collapse }>
                <Container>
                  <div><TrainRouteButtons onClick={ this.toggle }/></div>
                </Container>
              </Collapse>
            </div>
          </Container>
        </div>
        <hr />
      </Fragment>
    );
  }
}

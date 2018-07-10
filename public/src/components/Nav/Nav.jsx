import React, { Component, Fragment } from 'react';
import { 
  Navbar,
  NavbarBrand, 
  NavbarToggler
  } from 'reactstrap';

class Nav extends Component {
  render(){
    return(
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand>MTA</NavbarBrand>
          <NavbarToggler className="mr-2" />
        </Navbar>      
      </Fragment>
    );
  }
}

export default Nav;
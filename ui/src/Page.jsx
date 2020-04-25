/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Routes from './Routes.jsx';

import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon, Tooltip, OverlayTrigger, Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.jsx';

function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>Product Tracker</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/products">
          <NavItem>Product List</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <OverlayTrigger
            placement="left"
            delayShow={1000}
            overlay={<Tooltip id="create-issue">Create Product</Tooltip>}
          >
            <Glyphicon glyph="plus" />
          </OverlayTrigger>
        </NavItem>
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <MenuItem>About</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        Full source code available at this
        {' '}
        <a href="https://github.com/sahithiartala">
          GitHub repository
        </a>
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <Grid fluid>
      <NavBar />
      <Routes />
      <Footer />
    </Grid>
  );
}

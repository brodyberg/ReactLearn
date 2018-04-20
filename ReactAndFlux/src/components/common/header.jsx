"use strict"

var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var Badge = require('react-bootstrap/lib/Badge');

class Header extends React.Component {
  render() {
    return ( 
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="navbar-brand">
              <img style={{height: 30}} src="images/pluralsight_logo.webp" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/#about">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

module.exports = Header;
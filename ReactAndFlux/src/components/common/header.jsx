"use strict"

var React = require('react');
var Link          = require('react-router-dom').Link;

// var Navbar = require('react-bootstrap/lib/Navbar');
// var Nav = require('react-bootstrap/lib/Nav');
// var NavItem = require('react-bootstrap/lib/NavItem');
// var MenuItem = require('react-bootstrap/lib/MenuItem');
// var NavDropdown = require('react-bootstrap/lib/NavDropdown');
// var Badge = require('react-bootstrap/lib/Badge');

class Header extends React.Component {
  render() {
    return ( 
      <div>
        {/* <nav class="navbar navbar-light bg-light"> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="images/pluralsight_logo.webp" width="30" height="30" alt="" />
            Pluralsight
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
            {/* <ul class="navbar-nav"> */}
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li> */}
              {/* <li class="nav-item"> */}
                <Link className="nav-item nav-link active" to="/">Home</Link>
                {/* <a class="nav-link" href="#">Features</a> */}
              {/* </li> */}
              {/* <li class="nav-item"> */}
                <Link className="nav-item nav-link" to="/about">About</Link>
                {/* <a class="nav-link" href="#">Pricing</a> */}
              {/* </li>
              <li class="nav-item"> */}
                <Link className="nav-item nav-link" to="/authors">Authors</Link>
                {/* <a class="nav-link disabled" href="#">Disabled</a> */}
              {/* </li> */}
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/authors">Authors</Link>
              </li> */}
            {/* </ul> */}
            </div>
          </div>
        </nav>

        {/* <Navbar inverse collapseOnSelect>
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
              <NavItem eventKey={2} href="/authors">
                Authors
              </NavItem>
              <NavItem eventKey={3} href="/about">
                About
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
      </div>
    );
  }
};

module.exports = Header;
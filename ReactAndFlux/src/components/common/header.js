"use strict"

var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="navbar-brand">
              <img style={{height: 50}} src="images/pluralsight_logo.webp" />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/#about">About</NavItem>
        </Nav>
      </Navbar>

      // <nav className="navbar navbar-default">
      //   <div className="container-fluid">
      //     <a href="/" className="navbar-brand">
      //       <img style={{height: 50}} src="images/pluralsight_logo.webp" />
      //     </a>
      //     <ul className="nav navbar-nav">
      //       <li><a href="/">Home</a></li>
      //       <li><a href="/#about">About</a></li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
};

module.exports = Header;
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
      <div>
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>



      {/* <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className="navbar-brand">
              <img style={{height: 30}} src="images/pluralsight_logo.webp" />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/#about">About</NavItem>
        </Nav>
      </Navbar> */}



        {/* <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img style={{height: 30}} src="images/pluralsight_logo.webp" />
            </a>
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About</a></li>
            </ul>
          </div>
        </nav> */}
        <p>
            Badges <Badge>42</Badge>
        </p>
      </div>
 
      // <Navbar>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <a href="#home">React-Bootstrap</a>
      //     </Navbar.Brand>
      //   </Navbar.Header>
      //   <Nav>
      //     <NavItem eventKey={1} href="#">
      //       Link
      //     </NavItem>
      //     <NavItem eventKey={2} href="#">
      //       Link
      //     </NavItem>
      //     {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      //       <MenuItem eventKey={3.1}>Action</MenuItem>
      //       <MenuItem eventKey={3.2}>Another action</MenuItem>
      //       <MenuItem eventKey={3.3}>Something else here</MenuItem>
      //       <MenuItem divider />
      //       <MenuItem eventKey={3.4}>Separated link</MenuItem>
      //     </NavDropdown> */}
      //   </Nav>
      // </Navbar>      
    );
  }
};

module.exports = Header;
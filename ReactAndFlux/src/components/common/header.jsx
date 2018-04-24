"use strict"

var React = require('react');
var Link          = require('react-router-dom').Link;

class Header extends React.Component {
  render() {
    return ( 
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="images/pluralsight_logo.webp" style={{marginRight: 5}} width="30" height="30" alt="" />
            Pluralsight
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
                <Link className="nav-item nav-link" to="/authors">Authors</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

module.exports = Header;
"use strict";

var React = require('react');
var Link  = require('react-router-dom').Link;

class Home extends React.PureComponent {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
        <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

module.exports = Home;
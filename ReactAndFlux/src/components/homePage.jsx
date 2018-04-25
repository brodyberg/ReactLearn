"use strict";

var React = require('react');
var Link  = require('react-router-dom').Link;

// es6 syntax
class Home extends React.Component {
  render() {
    return (
      // class is reserved in js so we use 
      // className instead
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
        <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

// where Home matches the class above
module.exports = Home;
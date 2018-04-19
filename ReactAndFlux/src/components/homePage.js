"use strict";

var React = require('react');

// es6 syntax
class Home extends React.Component {
  render() {
    return (
      // class is reserved in js so we use 
      // className instead
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
      </div>
    );
  }
}

// where Home matches the class above
module.exports = Home;
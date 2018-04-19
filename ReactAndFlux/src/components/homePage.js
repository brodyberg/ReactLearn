"use strict";

var React = require('react');

// es5 syntax
var Home = React.createClass({
  render: function() {
    // when you have jsx, you have to wrap it 
    // in parens so it can handle multiple lines
    return (
      // class is reserved in js so we use 
      // className instead
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps.</p>
      </div>
    );
  }
});

// where Home matches the var above
module.exports = Home;
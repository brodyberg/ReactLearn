"use strict";

var React = require('react');
var Link  = require('react-router-dom').Link;

const NoMatch = ({ location }) => (
  <div>
    <h1>Page Not Found</h1>
    <span>
      Whoops! Sorry, there is nothing to see here. 
    </span>
    <Link to="/">Back to Home</Link>
  </div>
)

module.exports = NoMatch;
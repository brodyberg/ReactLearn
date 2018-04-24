"use strict"

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Header = require('./components/common/header.jsx');

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>      
    );
  }
}

module.exports = App;
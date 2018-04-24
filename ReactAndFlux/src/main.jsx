$ = jQuery = require('jquery');
// via $ or by jQuery
// setting both equal
// setting globally because bootstrap expects it

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./app.jsx');

ReactDOM.render(<App />, document.getElementById('app'));
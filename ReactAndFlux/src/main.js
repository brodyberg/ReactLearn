$ = jQuery = require('jquery');
// via $ or by jQuery
// setting both equal
// setting globally because bootstrap expects it

var React = require('react');
var Home = require('components/homePage');

React.render(<Home />, document.getElementById('app')); 

// this is the entry point for the app



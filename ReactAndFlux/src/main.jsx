$ = jQuery = require('jquery');
// via $ or by jQuery
// setting both equal
// setting globally because bootstrap expects it

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var ReactDOM = require('react-dom');
var routes = require('./routes');

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));

// Router.run(routes, function(Handler) {
//   ReactDOM.render(<Handler/>, document.getElementById('app'));
// });

//var App = require('./app.jsx')

// goal is to reference different components based
// on the url
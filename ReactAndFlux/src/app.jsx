"use strict"

var BrowserRouter = require('react-router-dom').BrowserRouter;
//var Router = require('react-router-dom').Router;
var Route         = require('react-router-dom').Route;
var Link          = require('react-router-dom').Link;

var Header        = require('./components/common/header.jsx');
var React         = require('react');
var HomePage      = require('./components/homePage.jsx');
var AuthorPage    = require('./components/authors/authorPage.jsx');
var AboutPage     = require('./components/about/aboutPage.jsx');

const PrimaryLayout = () => {
  return (
    // <Router>
      <div className="primaryLayout">
        <Header />
        Our React Router 4 App
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
          <a href="/about">my about link</a>
          <Link to="/about">my other about link</Link>
          <hr/>
          <Route
            path="/"
            exact
            component={HomePage} />
          <Route
            path="/about"
            component={AboutPage} />
          <Route
            path="/authors"
            component={AuthorPage} />
        </div>
      </div>
    // </Router>
  );
}

const App = () => ( 
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

module.exports = App;
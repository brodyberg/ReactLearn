/* eslint-disable strict */

var BrowserRouter = require('react-router-dom').BrowserRouter;

var Route         = require('react-router-dom').Route;
var Link          = require('react-router-dom').Link;

var Header        = require('./components/common/header.jsx');
var React         = require('react');
var HomePage      = require('./components/homePage.jsx');
var AuthorPage    = require('./components/authors/authorPage.jsx');
var AboutPage     = require('./components/about/aboutPage.jsx');

$ = jQuery = require('jquery');

const PrimaryLayout = () => {
  return (
      <div className="primaryLayout">
        <Header />
        <div>
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
  );
}

const App = () => ( 
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

module.exports = App;
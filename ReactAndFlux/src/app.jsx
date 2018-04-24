"use strict"

var BrowserRouter = require('react-router-dom').BrowserRouter;
var Header        = require('./components/common/header.jsx');
var React         = require('react');
var Route         = require('react-router-dom').Route;
var HomePage      = require('./components/homePage.jsx');
var AuthorPage    = require('./components/authors/authorPage.jsx');
var AboutPage     = require('./components/about/aboutPage.jsx');

const PrimaryLayout = () => {
  return (
    <div className="primaryLayout">
      <Header />
      <header>
        Our React Router 4 App
      </header>
      <main>
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
      </main>
    </div>
  );
}

const App = () => ( 
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

module.exports = App;
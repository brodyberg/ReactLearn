$ = jQuery = require('jquery');
// via $ or by jQuery
// setting both equal
// setting globally because bootstrap expects it

var React = require('react');
var ReactDOM = require('react-dom');

// var Route = require('react-router-dom').Route;

var App = require('./app.jsx');
// var HomePage = require('./components/homePage.jsx');
// var AuthorPage = require('./components/authors/authorPage.jsx');
// var AboutPage = require('./components/about/aboutPage.jsx');

// const PrimaryLayout = () => (
//   <div className="primaryLayout">
//     <header>
//       Our React Router 4 App
//     </header>
//     <main>
//       <Route
//         path="/"
//         exact
//         component={Home} />
//       <Route
//         path="/about"
//         component={AboutPage} />
//       <Route
//         path="/authors"
//         component={AuthorPage} />
//     </main>
//   </div>
// )

ReactDOM.render(<App />, document.getElementById('app'));





// var React = require('react');



// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;

// var createBrowserHistory  from 'history/lib/createBrowserHistory'
// let history = createBrowserHistory()

// var ReactDOM = require('react-dom');

//ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));

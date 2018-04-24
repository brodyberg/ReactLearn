"use strict"

//var React = require('react');
//var RouteHandler = require('react-router').RouteHandler;
var BrowserRouter = require('react-router-dom').BrowserRouter;

var Header = require('./components/common/header.jsx');

 var React = require('react');
// var ReactDOM = require('react-dom');

var Route = require('react-router-dom').Route;

//var App = require('./app.jsx');
var HomePage = require('./components/homePage.jsx');
var AuthorPage = require('./components/authors/authorPage.jsx');
var AboutPage = require('./components/about/aboutPage.jsx');

const PrimaryLayout = () => {
  return (
    <div className="primaryLayout">
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
// (
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

// class App extends React.Component {
//   render () {
//     return (
//       <div>hello</div>
//       // <BrowserRouter>
//       //   <PrimaryLayout />
//       // </BrowserRouter>
//     );
//   }
// }
// const App = () => {
//   return (
//     <BrowserRouter>
//       <PrimaryLayout />
//     </BrowserRouter>
//   );
// }

const App = () => ( 
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <Header />
//         <RouteHandler />
//       </div>      
//     );
//   }
// }

module.exports = App;
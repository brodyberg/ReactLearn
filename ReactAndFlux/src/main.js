$ = jQuery = require('jquery');
// via $ or by jQuery
// setting both equal
// setting globally because bootstrap expects it

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

// goal is to reference different components based
// on the url

class App extends React.Component {
  render () {
    var Child; 

    switch (this.props.route) {
      case 'about': Child = About; break;
      default: Child = Home;
    }

    return (
      <div>
        <Child />
      </div>      
    );
  }
}

// Does not recommend this method for production
function renderx() {
  var route = window.location.hash.substr(1);

  ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', renderx);
renderx();

// this is the entry point for the app



"use strict";

var React = require('react');

class About extends React.Component {

// we can start with a state
// of number highlighted
// and provide the arrows such that
// pressing an arrow will change the
// one highlighted (with looping)
// and then, right/left can (loop)
// change colors. All of the above 
// change the state of the component and
// trigger re-renders

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
        </p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }
}

module.exports = About;
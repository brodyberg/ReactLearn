"use strict";

var React = require('react');
var HotKeys = require('react-hotkeys').HotKeys;

const keyMap = {
  moveUp: 'up'  
}

const handlers = {
  'moveUp': (event) => console.log('Move up hotkey called!')
};

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
      <HotKeys
        keyMap={keyMap}
        handlers={handlers}>      
        <div id="x">
          <h1>About</h1>
          <p>
            asdfsadfasdfThis application uses the following technologies:
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
      </HotKeys>
    );
  }
}

module.exports = About;
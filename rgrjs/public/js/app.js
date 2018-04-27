var React = require('react');
var ReactDOM = require('react-dom');

console.log("here 1");

const Hello = () => {
  console.log("here 2");
  return React.createElement("h3", null, "Hello, React!");
  // return (
  //   <h3>Hello React</h3>
  // );
}

ReactDOM.render(React.createElement(Hello), document.getElementById('app'));
const Hello = () => {
    return React.createElement("h3", null, "Hello, React!");
  // return (
  //   <h3>Hello React</h3>
  // );
}

// var Hello = React.createClass({
//   render: function() {
//     return React.createElement("h3", null, "Hello, React!");
//   }
// });

ReactDOM.render(React.createElement(Hello), document.getElementById("app"));

// "use strict";

// import React from 'react';
// import ReactDOM from 'react-dom';

// console.log("Hello JS");
"use strict";

var React = require('react');

// when the app gets up and down it'll fire on this component
// (only if rendered anyway right...?)
// and this page, being pure, will hear those events
// and do complicated things

const KeyPage = (props) => {
  return (
    <div>
      hey there {props.message}
    </div>
  )
};

module.exports = KeyPage; 
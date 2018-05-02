import React from 'react'
import API from '../API'
import LinkStore from '../stores/LinkStore';

export default class Main extends React.Component {

  // before we land in the DOM
  componentWillMount() {
  }

  // after we land in the DOM
  componentDidMount() {
    // LinkStore.foo("hey");
    API.fetchLinks();
  }

  render() {
    return (
      <div>
        <h3>Links</h3>
        <ul>
          <li>Link..</li>
          <li>Link..</li>          
        </ul>
      </div>
    );  
  }
}

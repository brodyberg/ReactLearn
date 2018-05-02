import React from 'react'
import API from '../API'

export default class Main extends React.Component {

  // before we land in the DOM
  componentWillMount() {
  }

  // after we land in the DOM
  componentDidMount() {
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

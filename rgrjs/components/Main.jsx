import React from 'react'
import API from '../API'
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
  return { links: LinkStore.getAll() };
}

export default class Main extends React.Component {

  constructor(props) {
    super(props); 

    this.state = _getAppState(); 
    this.onChange = this.onChange.bind(this); 
  }

  onChange() {
    console.log("4. In the View");
    this.setState(_getAppState());
  }

  // before we land in the DOM
  componentWillMount() {
  }

  // after we land in the DOM
  componentDidMount() {
    // LinkStore.foo("hey");
    API.fetchLinks();
    LinkStore.on("change", this.onChange);
  }

  componentWillUnmount() {
    LinkStore.removeListener("change", this.onChange); 
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

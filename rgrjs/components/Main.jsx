import React from 'react'
import PropTypes from 'prop-types'
import API from '../API'
import LinkStore from '../stores/LinkStore';

let _getAppState = () => {
  return { links: LinkStore.getAll() };
}

export default class Main extends React.Component {

  static propTypes = {
    limit: PropTypes.number,
    bar: PropTypes.number.isRequired
  }
  
  static defaultProps = {
    limit: 4
  }
  
  state = _getAppState(); 

  // TC39 expression bodied functions 
  // are bound to this automatically so we can 
  // delete that code we had to add in the ctor 
  // for that purpose
  onChange = () => {
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

    let content = 
      this
        .state
        .links
        .slice(0, this.props.limit)
        .map(link => {
      return <li key={link._id}>
               <a href={link.url}>{link.title}</a>
             </li>;
    });

    return (
      <div>
        <h3>Links</h3>
        <ul>
          {content}
        </ul>
      </div>
    );  
  }
}

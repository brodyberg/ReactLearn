const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
	return (
  	<div>
      {props.cards.map (card => <Card {...card} />)}
    </div>
  )
}

class Form extends React.Component {
  state = { userName : '' }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Event: Form Submit', this.state.userName);

    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
      	console.log('Event: Then')
        this.props.onSubmit(resp.data);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          type="text" 
          placeholder="Github username" 
          required />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

class App extends React.Component {
  state = {
    cards: [
      { name: "Brody Berg", 
        avatar_url: "https://avatars0.githubusercontent.com/u/151955?v=4",
        company: "Microsoft"
      },
      { name: "Chuck Finley", 
        avatar_url: "https://avatars2.githubusercontent.com/u/561447?v=4",
        company: "Stanford Edu"
      },
      { name: "Emelyn Berg", 
        avatar_url: "https://avatars3.githubusercontent.com/u/22876892?v=4",
        company: ""
      },
    ]  
  }

  addNewCard = (cardInfo) => {
  	console.log('Event: addNewCard');
    console.log(cardInfo); 

    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));

    // this.state.cards.push({ name: cardInfo.name, avatar_url: cardInfo.avatar_url, company: cardInfo.company });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
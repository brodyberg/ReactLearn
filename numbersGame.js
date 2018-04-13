const Stars = (props) => {
  return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i => 
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => 
        // really, he'd recommend using a uniqueId on an object rather than index
        // but he's "keeping things simple"
        <span key={i}>{number}</span>
      )}
    </div>
  );
}

const Numbers = (props) => {
  
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  };
  
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span 
            // really, he'd recommend creating this as an instance method
            // but blah blah blah "simple enough for now"
            // one problem with instance though is that we'd have to convert
            // this into a class based component
            onClick={() => props.selectNumber(number)}
            key={i} 
            className={numberClassName(number)}>{number}</span>
        )}
      </div>
    </div>
  );
}

Numbers.list = _.range(1, 10);

class Game extends React.Component {

  state = {
    selectedNumbers: [],
    numberOfStars: 1 + Math.floor(Math.random() * 9)
  };

  selectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars}/>
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers}
                 selectNumber={this.selectNumber} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
        <Game />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode); 
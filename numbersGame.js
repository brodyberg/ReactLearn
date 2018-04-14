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
      <button disabled={props.selectedNumbers.length > 0 ? false : true}>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => 
        // really, he'd recommend using a uniqueId on an object rather than index
        // but he's "keeping things simple"
        <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
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

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return; 
    }
    else {
      this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
      }));
    }
  };

  render() {
    const { selectedNumbers, numberOfStars } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars}/>
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers} 
                  unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers}
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
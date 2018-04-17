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

  let button;

  switch (props.answerIsCorrect) {
    case true: 
      button = 
        <button className="btn btn-success">
          <i className="fa fa-check"></i>
        </button>
      break;
    case false: 
      button = 
        <button 
          onClick={props.checkAnswer}
          className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>
      break;
    default:
      button = 
        <button 
//          onClick={() => props.checkAnswer()}
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}>=</button>
      break;
  }

  return (
    <div className="col-2">
      {button}
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
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    // he was careful about order here between used and selected
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
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
    numberOfStars: 1 + Math.floor(Math.random() * 9),
    usedNumbers: [4, 7],
    answerIsCorrect: null // noooooo
                          // says we should have an answer state here
                          // rather than using null for logic
                          // but this will be "a challenge for you for later"
  };

  // we set answerIsCorrect to null in select and unselect number
  // so that the answer button reverts to = while the player is working
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }
  // it'd be fun if select and unselect number were reciprocal 
  // so we could implement like this: 
  // unselectNumber = !selectNumber 

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return; 
    }
    else {
      this.setState(prevState => ({
        answerIsCorrect: null,
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
      }));
    }
  };

  checkAnswer = () => {

    console.log("checkAnswer");
    console.log("randomNumberOfStars: " + this.state.numberOfStars);
    console.log("player total: " + this.state.selectedNumbers.reduce((acc, n) => acc + n, 0));
    
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  }

  render() {
    const { 
      selectedNumbers, 
      numberOfStars, 
      answerIsCorrect, 
      usedNumbers 
    } = this.state;

    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars}/>
          <Button selectedNumbers={selectedNumbers} 
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect} />
          <Answer selectedNumbers={selectedNumbers} 
                  unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers}
                 selectNumber={this.selectNumber}
                 usedNumbers={usedNumbers} />
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
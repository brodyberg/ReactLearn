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
        <button 
          onClick={props.acceptAnswer}
          className="btn btn-success">
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
    <div className="col-2 text-center">
      {button}
      <br />
      <br />
      <button 
        disabled={props.redraws <= 0}
        className="btn btn-warning btn-large" 
        onClick={props.redraw}>
        {/* <i className="fa fa-refresh" aria-hidden="true"></i> */}
        <i className="fa fa-refresh"></i>{props.redraws}
        {/* <i class="fa fa-refresh" aria-hidden="true"></i> */}
      </button>
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

const DoneFrame = (props) => {
  return (
    <div className="text-center">
      <h2>{props.doneStatus}</h2>
      <button 
        onClick={props.resetGame}
        className="btn btn-secondary">Play Again</button>
    </div>
  );
}

class Game extends React.Component {

  static randomNumber = () => 1 + Math.floor(Math.random() * 9);

  static startState = () => ({
    selectedNumbers: [],
    numberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null, // noooooo
                           // says we should have an answer state here
                           // rather than using null for logic
                           // but this will be "a challenge for you for later"
    redraws: 5,
    doneStatus: null
  });

  state = Game.startState();

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
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  }

  // move selected numbers to used, and reset selected to empty
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Game.randomNumber()
    }), this.updateDoneStatus);  // using react to call something safely after redraw
  }

  redraw = () => {

    if (this.state.redraws === 0) { return; }

    this.setState(prevState => ({
      numberOfStars: Game.randomNumber(),
      answerIsCorrect: prevState.answerIsCorrect,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }), this.updateDoneStatus);  // using react to call something safely after redraw
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Done. Nice!' };
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: 'Game Over!' };
      }
    });
  }

  possibleSolutions = ({starNumber, usedNumbers}) => {
    const possibleNumbers = _.range(1,10).filter(number => usedNumbers.indexOf(number) === -1);

    return this.possibleCombinationSum(possibleNumbers, starNumber); 
  }

  // from author
  possibleCombinationSum = (arr, n) => {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n); 
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount; i++) {
      var combinationSum = 0;
      for (var j = 0; j < listSize; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }

    return false;
  }

  resetGame = () => this.setState(Game.startState());

  render() {
    const { 
      selectedNumbers, 
      numberOfStars, 
      answerIsCorrect, 
      usedNumbers,
      redraws,
      doneStatus
    } = this.state;

    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars}/>
          <Button selectedNumbers={selectedNumbers} 
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect} 
                  acceptAnswer={this.acceptAnswer} 
                  redraw={this.redraw}
                  redraws={redraws} />
          <Answer selectedNumbers={selectedNumbers} 
                  unselectNumber={this.unselectNumber} />
        </div>
        <br />
        {doneStatus ?
          <DoneFrame 
            resetGame={this.resetGame}
            doneStatus={doneStatus} /> : 
          <Numbers 
            selectedNumbers={selectedNumbers}
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers} />
        }
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
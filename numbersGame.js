const Stars = (props) => {

  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  return (
    <div className="col-5">
      {_.range(numberOfStars).map(i => 
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
      <span>5</span>
      <span>6</span>
    </div>
  );
}

const Numbers = (props) => {
  const arrayOfNumbers = _.range(1, 10); 

  return (
    <div className="card text-center">
      <div>
        {arrayOfNumbers.map((number, i) =>
          <span key={i}>{number}</span>
        )}
      </div>
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
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
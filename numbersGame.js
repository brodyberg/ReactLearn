const Stars = (props) => {
  return (
    <div className="col-5">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
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
      ...
    </div>
  );
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
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
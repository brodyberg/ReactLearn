const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
    	<img width="75" src="https://avatars0.githubusercontent.com/u/151955?v=4" />
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Brody Berg</div>
        <div>Microsoft</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
	return (
  	<div>
    	<Card />
    	<Card />
    	<Card />
    </div>
  )
}

ReactDOM.render(<CardList />, mountNode);
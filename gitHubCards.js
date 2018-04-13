const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
    	<img src="http://placehold.it/75" />
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>Name here...</div>
        <div>Company Name here...</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
	return (
  	<div>
    	<Card />
    </div>
  )
}

ReactDOM.render(<CardList />, mountNode);
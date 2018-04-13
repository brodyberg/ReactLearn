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

let data = [
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

const CardList = (props) => {
	return (
  	<div>
    	<Card 
          name="Brody Berg" 
          avatar_url="https://avatars0.githubusercontent.com/u/151955?v=4"
          company="Microsoft" />
    	<Card />
    	<Card />
    </div>
  )
}

ReactDOM.render(<CardList />, mountNode);
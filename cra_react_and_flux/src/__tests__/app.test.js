import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Adds two to a number', () => {
  expect(App.PlusTwo(0)).toEqual(2);
  expect(App.PlusTwo(3)).toEqual(5); 
});
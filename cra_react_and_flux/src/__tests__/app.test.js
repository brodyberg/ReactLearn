import App from '../App'

it('adds two to a number', () => {
  expect(App.PlusTwo(0)).toEqual(2);
  expect(App.PlusTwo(3)).toEqual(5); 
});
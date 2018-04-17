# Learning React

## What do I know vs. Not know

Know: 

* React is a library not a framework
* Class vs. Function components
* How to show a component with React.DOM
* How to communicate between components
* How a component updates itself
* That React uses a virtual dom
* That JSX html builds non-basic HTML
  * ex. validation form
* Inline styling in JSX
* This axios ajax call + promise
* http://placehold.it/75 for canned image 75x75 pixels
* fontawesome for cool thingies
* lodash for helpers like _.range(1, 9)

Not know: 

* How to 
  * Build
  * Test
  * Use TypeScript
  * Route
  * Base this on a server-side thing
  * Base this on Azure Functions(?)
  * Base this on Haskell server-side
* Bring in Bootstrap, stylesheets etc
* How rich can JSX get?
* Is there non-css non-inline styling?
* What else can axios do?
  * Once again, how is it possible that we did an ajax
    call to a site that is not ours? 
* Samer suggests we use GraphQL
* Samer suggests we take Advanced Node.js "get comfy with Node, will make your React experience much more valuable"

## Notes: 

* Smart to clone your components to show state-isolation
* Super important to combine setState with prevState when your new state depends on the previous state
* Do not assume multiple setState calls will run in order
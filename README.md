# Learning React

## What do I know vs. Not know

Know: 

* Build
* npm install --save foo@1.1.32
* Bring in Bootstrap, stylesheets etc
* React bootstrap is compat with only BSv3 stylesheets
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
  * Test
  * Use TypeScript
  * Route
  * Base this on a server-side thing
* Host as Azure Functions (https://itnext.io/building-single-page-app-with-azure-functions-and-improving-cold-start-time-79a0faec9913)
* Wire a domain to the Azure Function
* WebPack: https://webpack.js.org/
  * Track our absolute site on-disk size over time
* Haskell server-side API (paas v2)
* Write the API server(s)
* GraphQL
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
* Props: immutable, ex. this.props.username
* State: mutable, ex. this.state.username
  * Only ever use state on the top-level component
  * Pass data down via props
* getInitialState - only do this in top-level
* getDefaultProps - return defaults if parent declares no value
* Lifecycle methods
  * componentWill|DidMount 
    * (before/after render)
    * you'll have dom
  * componentWillReceiveProps
    * When receiving new props
    * Not called on initial render
    * Why? set state before render, runs just before new properties are received
  * shouldComponentUpdate
    * runs right before update
    * when new props or state are received
    * why: performance, can opt out of re-rendering so you can save the perfs
  * componentWill|DidUpdate
    * before render time
    * why: prepare for update, can't call setUpdate
  * didUpdate
    * operate on DOM right after it's updated
  * componentWillUnmount
    * right before unhook
    * why: cleanup your resources
* Dynamic children need to have unique keys: 
  * <tr key={author.id}>
  * used by react to ensure right items are created/destroyed


# LATER: 

* host this thing right

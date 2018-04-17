# React and Flux

## Audience

* Assumes no previous React knowledge
* New to React
* New to React Router (client-side router)
* New to Flux

## Innovations in React

* JSX
* Virtual DOM
* Isomorphic Rendering
* Unidirectional Flows

First libraries to bring these approaches to a mass audience. 

## Philosophies: 

* HTML should be a *projection* of app-state, not a source of truth
* Javascript and HTML belong in the same file
* Unidirectional data-flow rather than two-way binding
* Inline styles can be good (at the component level)

## Choosing libraries

For things like: 

* Routing
* Dataflow
* Builds
* Deployments

For this app we'll choose: 

* Node.js
* Browserify to share node packages with the browser
* React as a components lib
* React router for client-side routing
* Flux for application dataflows
* Gulp as task runner

## Node

* Not required
* Runs JS on the server
* Includes NPM, the package manager
* We'll use NPM

## CommonJS Pattern

* Point is to re-use javascript modules
* Using this pattern: 

1. Reference things: 

    var dependency = require('/path/to/file');

2. Declare your module: 

    var MyModule = {
      // code here
    }
  
3. Expose to others: 

    module.exports = MyModule;

## What to Install

* Nodejs.org: 8.11.1 LTS
* cmd
* cd ReactAndFlux
* npm init
* psadmin
* npm install --save gulp gulp-connect gulp-open
* npm install -g gulp

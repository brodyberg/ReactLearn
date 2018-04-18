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
* npm i -g gulp
* VS Code: 
  * NPM
* Browserify: use npm packages in the browser
* npm install --save browserify reactify vinyl-source-stream
* Bootstrap and JQuery: 
* npm install --save bootstrap jquery gulp-concat


## How to fix: 

    C:\Users\brodyb\Documents\GitHub\ReactLearn\ReactAndFlux>gulp
    [17:34:45] Using gulpfile ~\Documents\GitHub\ReactLearn\ReactAndFlux\gulpfile.js
    [17:34:45] Starting 'html'...
    [17:34:45] Finished 'html' after 6.84 ms
    [17:34:45] Starting 'connect'...
    [17:34:45] Starting server...
    [17:34:45] Finished 'connect' after 4.32 ms
    [17:34:45] Starting 'open'...
    [17:34:45] Finished 'open' after 2.06 ms
    [17:34:45] Starting 'watch'...
    [17:34:45] Finished 'watch' after 7.18 ms
    [17:34:45] Starting 'default'...
    [17:34:45] Finished 'default' after 55 μs
    events.js:183
          throw er; // Unhandled 'error' event
          ^

    Error: listen EADDRINUSE 127.0.0.1:3000
        at Object._errnoException (util.js:1022:11)
        at _exceptionWithHostPort (util.js:1044:20)
        at Server.setupListenHandle [as _listen2] (net.js:1367:14)
        at listenInCluster (net.js:1408:12)
        at GetAddrInfoReqWrap.doListen [as callback] (net.js:1517:7)
        at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:97:10)

solution: 

Use TaskManager to kill node.exe
Or
1. Open an elevated prompt
2. netstat -a -b -o > foo.txt
3. Search for the port in question
4. Kill the process listed 
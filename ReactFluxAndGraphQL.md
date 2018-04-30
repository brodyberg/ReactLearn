# React, Flux and GraphQL

From [this course](https://app.pluralsight.com/player?course=react-apps-with-relay-graphql-flux&author=samer-buna&name=react-apps-with-relay-graphql-flux-m1&clip=0&mode=live)

## Install 

npm install --save express
npm install --save-dev babel-cli

-- no: babel-node server.js
fnf
-- no: npm run babel-node server.js
fnf
-- no: npx babel-node server.js
can't read the js

npm install --save-dev babel-preset-es2015

-- no, same error

add babel config to package.json for es2015

npx babel-node server.js 

worked

undefined string issue is: https://github.com/zkat/npx/issues/144

npx start

npm install --save nodemon

npx nodemon --exec npm start
npm install --save webpack webpack-cli

no: 

npx webpack-cli public\js\app.js public\bundle.js

npx webpack-cli public\js\app.js -o public\bundle.js

-- had a problem so: 

npx webpack-cli --mode development public\js\app.js -o public\bundle.js

-- then we created webpack.config.js

npx webpack-cli 

-- bundle.js this made is 
-- same size
-- still fails on 'require'

turns out: I had a missing ```</script>``` tag... 

npx webpack-cli --w --d

the --d will emit source maps which tragically double the bundle filesize but also make errors point to files as if they were pre-bundled, so errors are listed as app.js:7 rather than bundle.js:5009

## Notes

About going beyond MVC and REST for data-driven apps
GraphQL: JSON without the values
  * instead of different api endpoints for what we mean/need
  * Might be the killer of REST api
Flux
  * unidirectional dataflow
  * views should never change models
  * should only read
  * single dispatcher
  * views listen, React reacts
  * so views listen to stores, react re-renders them
  * one and only way data flows
Relay
  * Flux++
  * No separation of views and models
  * Data requirements expressed with GraphQL
  * Can merge multiple GraphQL queries into one single round-trip
  * Fetch and make data available with props
  * updates 
  * Efficiency, consistency and error handling

add links
list all links
search feature

Express and Node
  * Express is a web server
  * Babel and ES6
Webpack and Babel
  * bundle to one thing
  * using Babel we'll be able to use ES6
  * can use webpack-cli -w to just watch

NVM
 * Doesn't work on Windows...
 
When upgrading Node he also deletes and re-installs everything in node_modules

Can start things like this too: 

C:\Users\brodyb\Documents\GitHub\ReactLearn\rgrjs>node_modules\.bin\nodemon --exec npm start
[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `npm start`

nodemon (alone) doesn't work because it calls node server.js which has no idea how to parse the js we have. 
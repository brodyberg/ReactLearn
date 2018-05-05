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

Flux: 

  * There can be only one
  * Goal: one-way communication
  * Three things to learn: 
    * dispatch()
    * register()
    * waitFor()

Stores: 

  * Where programming happens
  * Each one is a singleton
  * Manage application state
  * Stores are utterly in control of whether or not they change based on incoming information
  * Stores emit an event when they change

MongoDB

  * Need collection 'links' 

Node
  
  * For ```process.env.MONGO_PASS``` to work, you need to launch *from* a window that can also see the user environment variable
  * You can verify the current window can see user environment variables by issuing the ```set``` command

GraphQL

  * Goals: 
    * Data communication performance
    * Developer experience
    * For richer, smarter apps (ex. mobile)
  * REST critiques
    * Fitting the REST model to HTTP was not consistent
    * Client depends on the server
    * Like a restaurant menu
    * Custom endpoints every time you want a thing
    * Grocery store: only 1 item per visit
  * GraphQL focuses on developer experience
  * A query
    * is a representation about how we think about the UI
    * models the outcome rather than the steps to get you there
    * Can be arbitrarily complicated and deep
  * You can express your data needs as a hierarchy
  * Get data with a single round trip
    * possibly has negative implications for simple calls being expensive because we're optimising for the richer client case
  * GrahphiQL

  * GraphQL
    * execution engine on the server
    * query language on the client
    * but GraphQL is on both, so it's a data lingua franca

In section 4, re-watch: 
  * GraphQL queries and mutations
  * GraphQL core principles

{
  person(personID: 3) {
    name,
    birthYear,
    homeworld {
      filmConnection {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}

# Why GraphQL is a Big Deal 

1. It's easy to write queries if you know the data you need

GraphQL facilitates getting idea of what data is out there via graphiql. This also facilitates authoring queries. 

However, intellisense isn't working for me. And, I am not sure how many other servers (ex. beyond expressjs) support a 'graphiql' option. Without that option the ability to have a graphiql front-end in which to explore the schema might be limited. 

2. Queries describe the shape of the response

The query is essentially json fields without the values. In the simple case. How does this premise scale to more sophisticated queries?

3. No over-fetching, no under-fetching

I think the idea here is that this is the case because rather than being forced into different REST endpoints with hard-coded querie (and munged business logic) we're working directly with a query language and a single endpoint so we can always get what we need. 

The benefit is that since every query is in terms of the query language we have the full richness of *that* limiting us rather than *the endpoint*. Cons are that for people really get what data is coming back they'll have to understand GraphQL *on the client* rather than (generally) having to understand (for example) SQL on the SQL server wrapped in a stored procedure. 

The thing with REST queries is that there's business logic munging stuff (possibly) on the server. Is that the case here too? Or is it more likely the munging happens on the client? 

4. You can customize the data you get with aliases and field arguments

This is cool. What I like about this is that the client-side dev is going to do this anyway, so getting it out of the way directly in the query is nice. Also, the client-side dev is the important one here, not the server. 

5. You can query objects and their connections, and nest as deep as you need, and get all that data in a single round trip

I am excited about this but haven't seen it in practice. What I'm really curious about is when different objects are from different data sources. Understanding what the code that melds two different sources looks like is important. 

6. As views change their data requirements, we don't need to change the server

This is potentially really nice. _Knowing_ we don't have to change the server for certain types of updates is a big deal for scope-of-work and assignments. 

I am unclear and worry about the server and the client disagreeing about the schema. However, that disagreement is nothing new for any client/server arrangement, SQL etc. 

7. Built-in accurate and always up to date documentation

This is pretty unreal and I really hope we can get this benefit going forward if we have to use other servers than what is in this pluralsight course. 

8. Queries are composable and re-usable

This is a big deal. Not just for taking n fragments and using them across m queries but for testing as well. 

9. Queries can re-use your existing code

I don't get this one. He says "you can re-use your existing logic on the server." 

10. Mutations are just like queries, same structure, same benefits

I like this

# Relay

* For declarative fetching and mutating of data

Working with data is hard, "Why Relay" is that it gives you the following: 

  * Batching
  * Performance
  * Error handling
  * Retry strategies
  * Optimistic Mutation
  * Rollbacks
  * Pagination
  * Caching

## Core Principles

* Storage & Caching
  * Relay.Store
  * Single, normalized, client-side datastore in-memory
  * QueueStore -> MemoryStore -> CacheManager
  * MemoryStore has a simple bool understanding of everything which helps answer question of "is it fetched or not?"
  * QueueStore this is where relay handles in-flight changes to the data
    * in front of the memory store, so you can query from it
    * which allows for optimistic updates in our ui
    * also allows for easy roll-backs
      * rather than try to fix things, you just remove a faulty thing from the queue and we're done
  * CacheManager can be any client-side storage engine
  * The layering is important because "any layer than can answer your query will answer your query"

* Object identification
  * UUID for everything
  * Disambiguate and deduplicate
  * What we need - what we have
  * The NODE interface (a new thing he'll show)

"use strict";

import express from 'express'
import schema from './data/schema'
import GraphQLHTTP from 'express-graphql'

import morgan from 'morgan'
import { MongoClient } from 'mongodb'

let port = 3000; 

let app = express(); 

app.use(morgan('combined'))
app.use(express.static('public'));
app.use('/graphql', GraphQLHTTP({
  schema: schema
}));

//app.get('/', (req, res) => res.send('hello brody!'));

let rgrjs_db; 

MongoClient
  .connect("mongodb://brodybrgrjs.documents.azure.com:10255/?ssl=true", {
    auth: {
      user: 'brodybrgrjs',
      password: process.env.MONGO_PASS,
    }
  }, 
  function(err, mongoClient) { 
    if (err) throw err;

    rgrjs_db = mongoClient.db("rgrjs");
    app.listen(port, () => 
    { 
      console.log("Server running on https://localhost:" + port)
    });
  });

app.get("/data/links", (req, res) => {
  rgrjs_db
    .collection("links")
    // this means "find everything" 
    .find({})
    .toArray((err, links) => {
      if (err) throw err;
      
      res.json(links);
    });
});

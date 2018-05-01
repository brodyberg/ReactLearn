"use strict";

import express from 'express';
import {MongoClient} from 'mongodb';

let app = express(); 

app.use(express.static('public'));

//app.get('/', (req, res) => res.send('hello brody!'));

app.listen(3000);

let userPass = process.env.MONGO_PASS;

let url = "mongodb://brodybrgrjs:" + userPass + "%40brodybrgrjs.documents.azure.com/?ssl=true"; 

console.log("url: " + url);

MongoClient
  .connect("mongodb://brodybrgrjs.documents.azure.com:10255/?ssl=true", {
    auth: {
      user: 'brodybrgrjs',
      password: userPass,
    }
  }, 
  function(err, mongoClient) { 

    if (err) throw err;

    // by default we'll connect to the wrong database
    var rgrjs_db = mongoClient.db("rgrjs");
  
    rgrjs_db
      .collection("links")
      // this means "find everything" 
      .find({})
      .toArray((err, links) => {
        if (err) throw err;
  
        console.log(links);
      });

      mongoClient.close();
  });

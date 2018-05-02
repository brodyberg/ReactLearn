"use strict";

import express from 'express'
import morgan from 'morgan'
import {MongoClient} from 'mongodb'

let app = express(); 

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   console.log('Req: ' + req.method);
//   console.log('Req: ' + req.params);
//   next();
// })

app.use(morgan('combined'))

let port = 3000; 

app.use(express.static('public'));

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
  
    // rgrjs_db
    //   .collection("links")
    //   // this means "find everything" 
    //   .find({})
    //   .toArray((err, links) => {
    //     if (err) throw err;
  
    //     console.log(links);
    //   });

    //   mongoClient.close();
  });

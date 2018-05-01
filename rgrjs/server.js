"use strict";

import express from 'express';
import {MongoClient} from 'mongodb';
//import {Server} from 'mongodb';

let app = express(); 

app.use(express.static('public'));

//app.get('/', (req, res) => res.send('hello brody!'));

app.listen(3000);

let userPass = process.env.MONGO_PASS;

// var MongoClient = require('mongodb').MongoClient
//   , Server = require('mongodb').Server;

//let url = "mongodb://brodybrgrjs:" + userPass + "%40brodybrgrjs.documents.azure.com:10255/?ssl=true"; 
let url = "mongodb://brodybrgrjs:" + userPass + "%40brodybrgrjs.documents.azure.com/?ssl=true"; 

console.log("url: " + url);

//MongoClient.connect(url, function(err, mongoclient) {
MongoClient
  .connect("mongodb://brodybrgrjs.documents.azure.com:10255/?ssl=true", {
    auth: {
      user: 'brodybrgrjs',
      password: userPass,
    }
  }, 
  function(err, mongoClient) { 

    if (err) throw err;
  
  //  mongoclient.connect()
  
    // Get the first db and do an update document on it
    var rgrjs_db = mongoClient.db("rgrjs");
  
    console.log("rgrjs_db: " + rgrjs_db);
  
    rgrjs_db
      .collection("links")
      .find({})
      .toArray((err, links) => {
        if (err) throw err;
  
        console.log(links);
      });

      mongoClient.close();
  });

// Set up the connection to the local db
//var mongoclient = new MongoClient(new Server("url", 10255), {native_parser: true});

//mongoclient.

// Open the connection to the server
// mongoclient.connect(function(err, mongoclient) {

//  if (err) throw err;

// //  mongoclient.connect()

//   // Get the first db and do an update document on it
//   var rgrjs_db = mongoclient.db("rgrjs");

//   console.log("rgrjs_db: " + rgrjs_db);

//   rgrjs_db
//     .collection("links")
//     .find({})
//     .toArray((err, links) => {
//       if (err) throw err;

//       console.log(links);
//     });
//   });

  // links_db.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
  //   assert.equal(null, err);
  //   assert.equal(1, result);

  //   // Get another db and do an update document on it
  //   var db2 = mongoclient.db("integration_tests2");
  //   db2.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
  //     assert.equal(null, err);
  //     assert.equal(1, result);

      // Close the connection
     // mongoclient.close();
    // });
  // });
//});
// MongoClient.connect(url, function(err, db) {

//   if (err) throw err;

//   console.log("Connected correctly to server");
// //  console.log("Current database", db.databaseName);

//   console.log(db);

//   //db==foo

//   db.close();

// });

// let mongoClient = 
//   new MongoClient(new Server(url));

// mongoClient.open(function(err, mongoClient) {
//   var rgrjs = mongoClient.db("rgrjs");

//   mongoClient.close();
// });

// MongoClient
//   .connect("mongodb://brodybrgrjs.documents.azure.com:10255/?ssl=true", {
//     auth: {
//       user: 'brodybrgrjs',
//       password: userPass,
//     }
//   }, 
//   function (err, database) {
//     if (err) throw err;

//     console.log(database.databaseName);

// //    var dbo = database.db("rgrjs");
//     var dbo = database("rgrjs");

// //    console.log(database); 

//     console.log(dbo.getCollectionNames);

//     dbo
//       .collection("links")
//       .find({})
//       .toArray((err, links) => {
//         if (err) throw err;

//         console.log(links);
//       });

//     db.close();
//   });
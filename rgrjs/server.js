"use strict";

import express from 'express';

let app = express(); 

app.use(express.static('public'));

//app.get('/', (req, res) => res.send('hello brody!'));

app.listen(3000);
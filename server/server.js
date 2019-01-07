require('config/config');

//Install --save and mongoose// make a change..

var { mongoose } = require('./db/mongoose');

//Runs 2 scripts; config then mongoose file

//Designing the REST API//
//Install Express//
const express = require('express');

var {Task} = require('./models/tasks');

var app = express();
const port = process.env.PORT;

app.get('/tasks', (req, res) => {
    //write mongoose queries here so when app triggers url
    //Design model before creating queries
    Task.find().then((alltasks) => {
        res.send({alltasks})
    }, (e) => {
        res.status(400).send(e);
    });
});

//Node REST API needs to continue running in the background
app.listen(port, () => {
    console.log(`App started on port ${port}`)
});

//Don't use this method below to allow CORS because it exposes your API (information) to everyone if you deploy the app
var app = express();
app.use(cors());
app.options('*', cors());
const port = process.env.PORT;

app.get('/tasks', (req, res) => {
    //write mongoose queries here
    Tasks.find().then((alltasks) => {
        res.send(alltasks)
    }, (e) => {
        res.status(400).send(e);
    });
});
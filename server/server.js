var express = require('express');
var app     = express();
var bodyParser  = require("body-parser");
var morgan  = require("morgan");
var cors    = require("cors");
var passport    = require('passport')
var api = require('../api/api.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", api);


module.exports  = app;

'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
var DB = require('./db.js');

// mongoose.connect(db.url);

var db = mongoose.createConnection(DB.url);

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

var Schema = mongoose.Schema;
var userAccountSchema = new Schema({
  account: {
    id: Number,
    includeAdult: Boolean,
    language: String,
    name: String,
    username: String
  },
  apiKey: String,
  session: {
    session_id: String,
    success: Boolean
  }
});

var UserAccount = db.model('UserAccount', userAccountSchema);

app.post('/authentication', (req, res) => {
  var userAccount = new UserAccount();
  userAccount.account = req.body.account;
  userAccount.apiKey = req.body.apiKey;
  userAccount.session = req.body.session;

  userAccount.save().then(function (result) {
    return res.send(result);
  });
});

app.post('/authentication/data', (req, res) => {
  UserAccount.findById(req.body.token).then(function (result) {
    return res.send(result);
  });
});

app.listen(port);

console.log('Running at port: ' + port);

exports = module.exports = app;

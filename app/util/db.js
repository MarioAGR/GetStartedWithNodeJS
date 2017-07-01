// Provides working functions to work with the in-memory database

var lokijs = require('lokijs');

var db = new lokijs('db.json');

module.exports = db;
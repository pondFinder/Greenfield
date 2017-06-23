var knex = require('knex') ({
  //First shot at require statement, may need refactoring (discuss w/ Semie)
  client: 'SQLite3'
});

var bookshelf = require('bookshelf')(knex);

/* these functions are called by api.js and query the database.
They send back JSON to the callback provided. */


//Create table models

//TODO: handle model relatioships by writing relationship functions in models

//user
var User = bookshelf.Model.extend({
  tableName: 'users',
});

//company
var Company = bookshelf.Model.extend({
  tableName: 'companies',
});

//client
var Clients = bookshelf.Model.extend({
  tableName: 'clients',
});

//work orders
var WorkOrder = bookshelf.Model.extend({
  tableName: 'work_orders',
});

//work orders users join table
var WorkOrdersUsers = bookshelf.Model.extend({
  tableName: 'work_orders_users',
});

//----------------------query functions------------------------

//------User queries---------


//get all User data

//pass in user ID, returns data model for user
//queryObj is an object with conditions. examples:
/*
  getUser({
    id: 1
  });

  getUser({
    username: 'HimanshuP@gmail.com'
  });
*/
exports.getUser = function (queryObj) {
  new User({queryObj})
    .fetch()
    .then( function(model) {
      return model;
    });
}

//add new user
exports.addUser = function (queryObj) {
  users.set
}



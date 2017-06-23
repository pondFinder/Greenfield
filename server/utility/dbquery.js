var knex = require('knex') ({
  //First shot at require statement, may need refactoring (discuss w/ Semie)
  client: 'SQLite3'
});

var bookshelf = require('bookshelf')(knex);

/* these functions are called by api.js and query the database.
They send back JSON to the callback provided. */


//Create table models

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

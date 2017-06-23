//add requirements for knex and bookshelf
var app = require ('../app.js');
var express = require('express');
var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, 'db/work_orders.sqlite')
  },
  useNullAsDefault: true
});

var db = require('bookshelf')(knex);

//defaultTo may not be right for role
//specified BLOB type (sql for photos) on photo
db.knex.schema.createTableIfNotExists('users', function(users) {
  users.increments('id').primary();
  users.string('username', 65);
  users.string('password', 25);
  users.string('first_name', 25);
  users.string('last_name', 60);
  users.string('role', 30).defaultTo('team_member');
  users.dateTime('date');
  users.specifyType('photo', 'BLOB');
  users.string('phone', 15);
  users.string('phone_alt', 15);
  users.foreign('company_id').references('id').inTable('companies');


})
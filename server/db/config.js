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
  users.string('role', 30).defaultTo('user');
  users.dateTime('date');
  users.specifyType('photo', 'BLOB');
  users.string('phone', 15);
  users.string('phone_alt', 15);
  users.foreign('company_id').references('id').inTable('companies');
});

db.knex.schema.createTableIfNotExists('work_orders', function(orders) {
  orders.increments('id').primary();
  orders.text('notes', 'mediumtext');
  orders.text('job_info', 'mediumtext');
  orders.dateTime('created_at');
  orders.boolean('is_done');
  orders.text('duration', 'mediumtext');
  orders.foreign('company_id').references('id').inTable('companies');
});

db.knex.schema.createTableIfNotExists('clients', function(clients) {
  clients.increments('id').primary();
  clients.string('first_name', 25);
  clients.string('last_name', 60);
  clients.string('phone', 15);
  clients.string('alt_phone', 15);
  clients.string('street_address_1', 200);
  clients.string('street_address_2', 200);
  clients.string('city', 100);
  clients.string('state_province', 10);
  clients.string('postal_code', 10);
  clients.string('country', 15);
  clients.string('email', 30);
});

module.exports.db = db;
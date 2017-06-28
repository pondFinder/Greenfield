//add requirements for knex and bookshelf
var app = require ('../app.js');
var express = require('express');
var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, 'work_orders.sqlite')
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
  users.string('photo');
  users.string('phone', 15);
  users.string('phone_alt', 15);
  users.integer('company_id');
  // users.foreign('company_id').references('company.id');
})
  .then( (table) => {
    console.log('Table exists: ', table);
  });

db.knex.schema.createTableIfNotExists('work_orders', function(orders) {
  orders.increments('id').primary();
  orders.text('notes', 'mediumtext');
  orders.text('job_info', 'mediumtext');
  orders.text('created_at', 'mediumtext');
  orders.boolean('is_done').defaultTo(false);
  orders.text('duration', 'mediumtext');
  // orders.integer('client_id');
  orders.string('client');
  orders.string('photo');
  // orders.foreign('company_id').references('company.id');
})
  .then( (table) => {
    console.log('Table exists: ', table);
  });

// db.knex.schema.createTableIfNotExists('clients', function(clients) {
//   clients.increments('id').primary();
//   clients.string('first_name', 25);
//   clients.string('last_name', 60);
//   clients.string('phone', 15);
//   clients.string('alt_phone', 15);
//   clients.string('street_address_1', 200);
//   clients.string('street_address_2', 200);
//   clients.string('city', 100);
//   clients.string('state_province', 10);
//   clients.string('postal_code', 10);
//   clients.string('email', 30);
// })
//   .then( (table) => {
//     console.log('Table exists: ', table);
//   });

//Is it ok to reference primary contact by id in users?
// db.knex.schema.createTableIfNotExists('company', function(company) {
//   company.increments('id').primary();
//   company.integer('primary_contact');
//   // company.foreign('primary_contact').references('users.id');
//   company.string('street_address_1', 200);
//   company.string('street_address_2', 200);
//   company.string('city', 100);
//   company.string('state_province', 10);
//   company.string('postal_code', 10);
//   company.string('email', 30);
//   company.string('announcements', 1000);
// })
//   .then( (table) => {
//     console.log('Table exists: ', table);
//   });

// db.knex.schema.createTableIfNotExists('users_work_orders', function(table) {
//   table.increments('id').primary();
//   table.integer('user_id');
//   table.integer('work_order_id');
//   // table.foreign('user_id').references('users.id');
//   // table.foreign('work_order_id').references('orders.id');
// })
//   .then( (table) => {
//     console.log('Table exists: ', table);
//   });

module.exports.db = db;

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
  clients.string('email', 30);
});

//Is it ok to reference primary contact by id in users?
db.knex.schema.createTableIfNotExists('companies', function(companies) {
  companies.increments('id').primary();
  companies.foreign('primary_contact').references('id').inTable('users');
  companies.string('street_address_1', 200);
  companies.string('street_address_2', 200);
  companies.string('city', 100);
  companies.string('state_province', 10);
  companies.string('postal_code', 10);
  companies.string('email', 30);
});

db.knex.schema.createTableIfNotExists('company_users', function(table) {
  table.increments('id').primary();
  table.foreign('company_id').references('id').inTable('companies');
  table.foreign('user_id').references('id').inTable('users');
});

db.knex.schema.createTableIfNotExists('company_clients', function(table) {
  table.increments('id').primary();
  table.foreign('company_id').references('id').inTable('companies');
  table.foreign('client_id').references('id').inTable('clients');
});

db.knex.schema.createTableIfNotExists('company_work_orders', function(table) {
  table.increments('id').primary();
  table.foreign('company_id').references('id').inTable('companies');
  table.foreign('work_order_id').references('id').inTable('orders');
});

module.exports.db = db;
module.exports.tables = {
  users: 'users',
  clients: 'clients',
  workOrders: 'work_orders',
  companies: 'companies',
  companyUsers: 'company_users',
  companyWorkOrders: 'company_work_orders',
  companyClients: 'company_clients'
};
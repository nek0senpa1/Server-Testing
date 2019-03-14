require('dotenv').config();

const knex = require('knex');



const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || 'testing';

module.exports = knex(config[dbEnv]);
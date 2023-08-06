require("dotenv").config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.port,
  database: process.env.DATABASE,
});

module.exports = pool;

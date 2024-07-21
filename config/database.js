const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "192.168.18.25",
  database: "login",
  password: "postgres",
  port: 38561,
});

module.exports = pool;

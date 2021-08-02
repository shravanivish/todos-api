const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "abcd1234",
  database: "todo_db",
  port: 5432,
});

module.exports = pool;

const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const db = pg.Pool({
  connectionString,
});

module.exports = db;

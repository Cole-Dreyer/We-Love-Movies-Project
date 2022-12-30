const path = require("path");

require("dotenv").config();

// create variables to hold URLs for both databases listed in .env
// create variable to hold the NODE_ENV status.
const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL = "postgres://skaykxav:5x6RWn0vHkF3GYZ-JQ4i60HXOtkPxaO9@berry.db.elephantsql.com/skaykxav",
  PRODUCTION_DATABASE_URL = "postgres://skaykxav:5x6RWn0vHkF3GYZ-JQ4i60HXOtkPxaO9@berry.db.elephantsql.com/skaykxav",
} = process.env;

// create variable to hold URL depending on if migration is run
// with NODE_ENV as development or as production.
const DATABASE_URL =
  NODE_ENV === "production"
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};

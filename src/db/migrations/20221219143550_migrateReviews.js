
//The `reviews` table represents a review done by a critic of a single movie. It references both a critic and a movie.

exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary(); // Primary key for review table
    table.text("content");
    table.integer("score");
    table.integer("critic_id").unsigned().notNullable(); //Foreign key referencing critic table
    table
      .foreign("critic_id")
      .references("critic_id")
      .inTable("critics")
      .onDelete("CASCADE");
    table.integer("movie_id").unsigned().notNullable(); //Foreign key referencing movies table
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};

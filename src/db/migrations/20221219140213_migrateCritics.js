
//The `critics` table represents move ciritics who have given reviews for movies. Table has the defined fields.

exports.up = function(knex) {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary(); // Sets critic_id as the primary key
    table.string("preferred_name");                  //js 4-1 creates columns
    table.string("surname");
    table.string("organization_name");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("critics");
};

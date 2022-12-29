
//The `theaters` table represents movie theaters with respective fields.

exports.up = function(knex) {
  return knex.schema.createTable("theaters", (table) => {
    table.increments("theater_id").primary(); // Sets theater_id as the primary key
    table.string("name");
    table.integer("address_line_1");
    table.string("address_line_2");
    table.text("city");
    table.string("state");
    table.string("zip");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("theaters");
};
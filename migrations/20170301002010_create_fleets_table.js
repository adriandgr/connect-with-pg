
exports.up = function(knex) {
  return knex.schema.createTable("fleets", (table) => {
    table.increments();
    table.string("name");
    table.string("country");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("fleets");
};

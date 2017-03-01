
exports.up = function(knex) {
  return knex.schema.createTable("ships", (table) => {
    table.increments();
    table.string("name");
    table.date("date_commissioned");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ships");
};

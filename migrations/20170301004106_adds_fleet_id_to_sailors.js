
exports.up = function(knex) {
  return knex.schema.table("ships", (table) => {
    table.integer("fleet_id").unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.table("ships", (table) => {
    table.dropColumn("fleet_id");
  });
};

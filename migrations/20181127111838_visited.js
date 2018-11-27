exports.up = function(knex, Promise) {
  return knex.schema.createTable("beer", function(table) {
    table.increments();
    table.float("lat");
    table.float("long");
    table.string("trip_detail");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("visit");
};

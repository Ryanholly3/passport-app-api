exports.up = function(knex, Promise) {
  return knex.schema.createTable("destination", function(table) {
    table.increment();
    table.float("lat");
    table.float("long");
    table.string("trip_detail");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("destination");
};

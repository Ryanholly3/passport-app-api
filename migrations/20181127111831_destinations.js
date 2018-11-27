exports.up = function(knex, Promise) {
  return knex.schema.createTable("destination", function(table) {
    table.increment()
    table.float("lat")
    table.float("long")
    table.string("trip_detail")
    table.integer("passport_users_id").references("passport_users.id").unsigned().onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("destination");
};

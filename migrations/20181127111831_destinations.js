exports.up = function(knex, Promise) {
  return knex.schema.createTable("destination", function(table) {
    table.increments()
    table.float("latitude")
    table.float("longitude")
    table.string("country_code")
    table.string("trip_detail")
    table.integer("passport_users_id").references("passport_users.id").unsigned().onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("destination");
};

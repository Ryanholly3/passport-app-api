exports.up = function(knex, Promise) {
  return knex.schema.createTable("visited", function(table) {
    table.increments()
    table.float("lat")
    table.float("long")
    table.string("trip_detail")
    table.integer('workout_users_id').references('workout_users.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("visited");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", function(table) {
    table.increment();
    table.string("name");
    table.integer("age");
    table.string("homebase");
    table.string("email");
    table.string("gender");
    table.string("bio");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};

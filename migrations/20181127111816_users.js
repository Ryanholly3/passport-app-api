exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", function(table) {
    table.increment();
    table.string("name");
    table.string("email");
    table.integer("age");
    table.string("gender");
    table.string("homeCountry");
    table.string("bio");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};

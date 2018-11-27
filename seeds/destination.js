
exports.seed = function(knex, Promise) {
  return knex("destination").del()
    .then(function () {
      return knex("destination").insert([
        {
          id: 1,
          latitude: 48.8566,
          longitude: 2.3522,
          country_code: "FR",
          trip_detail: "I want to visit the eiffel tower!"
        },
        {
          id: 2,
          latitude: 33.4484,
          longitude: -112.0740,
          country_code: "US",
          trip_detail: "I want to see the saguaros in phoenix!"
        }
      ]);
    });
};

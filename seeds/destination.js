
exports.seed = function(knex, Promise) {
  return knex("destination").del()
    .then(function () {
      return knex("destination").insert([
        {
          id: 1,
          latitude: 48.8566,
          longitude: 2.3522,
          country_code: "FR",
          trip_detail: "I want to visit the eiffel tower!",
          
        },
        {
          id: 2,
          latitude: 33.4484,
          longitude: -112.0740,
          country_code: "US",
          trip_detail: "I want to see the saguaros in phoenix!"
        },
        {
          id: 3,
          latitude: 53.3498,
          longitude: -6.2603,
          country_code: "IE",
          trip_detail: "I can't wait to drink guiness in dublin!"
        },
        {
          id: 4,
          latitude: 18.1096,
          longitude: -77.2975,
          country_code: "JM",
          trip_detail: "Can't wait to drink margaritas in Portmore, Jamaica!"
        },
        {
          id: 5,
          latitude: 39.0392,
          longitude: 125.7625,
          country_code: "KP",
          trip_detail: "I want to check out Pyongchang! Dictatorship's are so in right now."
        },
        {
          id: 6,
          latitude: 1.3521,
          longitude: 103.8198,
          country_code: "SG",
          trip_detail: "I want to climb the Tanjong Pagar Centre in Singapore!"
        },
        {
          id: 7,
          latitude: 52.3680,
          longitude: 4.9036,
          country_code: "NL",
          trip_detail: "I can't wait to check out the red light district!"
        },
        {
          id: 8,
          latitude: 43.3438,
          longitude: 17.8078,
          country_code: "BA",
          trip_detail: "Mostar in Bosnia looks out of this WORLD!!"
        }
      ]);
    });
};

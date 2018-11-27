
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          id: 1,
          latitude: 44.9778,
          longitude: -93.2650,
          country_code: "US",
          trip_detail: "Minneapolis was so much fun!"
        },
        {
          id: 2,
          latitude: 35.6895,
          longitude: 139.6917,
          country_code: "JP",
          trip_detail: "TOKYO WAS THE BEST BY FAR!"
        },
        {
          id: 3,
          latitude: 42.3601,
          longitude: -71.0589,
          country_code: "US",
          trip_detail: "Boston was kewl!"
        },
        {
          id: 4,
          latitude: 49.2827,
          longitude: -123.1207,
          country_code: "CA",
          trip_detail: "Vancouver was radical!!"
        },
        {
          id: 5,
          latitude: 18.1096,
          longitude: -77.2975,
          country_code: "JM",
          trip_detail: "Drinking on the beach in Jamaica was chill mon"
        },
        {
          id: 6,
          latitude: -37.8136,
          longitude: 144.9631,
          country_code: "AU",
          trip_detail: "Kangarooooooooos!"
        },
        {
          id: 7,
          latitude: -22.9068,
          longitude: -43.1729,
          country_code: "BR",
          trip_detail: "I watched a fulbal game in Rio de Janeiro !"
        },
        {
          id: 8,
          latitude: -55.9833,
          longitude: -67.2667,
          country_code: "CL",
          trip_detail: "Visited the southern most point in South America, Cape Horn!"
        }
      ]);
    });
};

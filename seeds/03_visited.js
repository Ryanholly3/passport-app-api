
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "visited"; ALTER SEQUENCE visited_id_seq RESTART WITH 9;')
    .then(function () {
      return knex('visited').insert([
        {
          id: 1,
          name: "Minneapolis, USA",
          latitude: 44.9778,
          longitude: -93.2650,
          country_code: "US",
          trip_detail: "Minneapolis was so much fun!",
          passport_users_id: 1
        },
        {
          id: 2,
          name: "Tokyo, Japan",
          latitude: 35.6895,
          longitude: 139.6917,
          country_code: "JP",
          trip_detail: "TOKYO WAS THE BEST BY FAR!",
          passport_users_id: 1
        },
        {
          id: 3,
          name: "Boston, USA",
          latitude: 42.3601,
          longitude: -71.0589,
          country_code: "US",
          trip_detail: "Boston was kewl!",
          passport_users_id: 2
        },
        {
          id: 4,
          name: "Vancouver, Canada",
          latitude: 49.2827,
          longitude: -123.1207,
          country_code: "CA",
          trip_detail: "Vancouver was radical!!",
          passport_users_id: 2
        },
        {
          id: 5,
          name: "Kingston, Jamaica",
          latitude: 18.1096,
          longitude: -77.2975,
          country_code: "JM",
          trip_detail: "Drinking on the beach in Jamaica was chill mon",
          passport_users_id: 3
        },
        {
          id: 6,
          name: "Melbourne, Australia",
          latitude: -37.8136,
          longitude: 144.9631,
          country_code: "AU",
          trip_detail: "Kangarooooooooos!",
          passport_users_id: 3
        },
        {
          id: 7,
          name: "Rio de Janerio, Brazil",
          latitude: -22.9068,
          longitude: -43.1729,
          country_code: "BR",
          trip_detail: "I watched a fulbal game in Rio de Janeiro !",
          passport_users_id: 4
        },
        {
          id: 8,
          name: "Cape Horn, Chile",
          latitude: -55.9833,
          longitude: -67.2667,
          country_code: "CL",
          trip_detail: "Visited the southern most point in South America, Cape Horn!",
          passport_users_id: 4
        }
      ]);
    });
};

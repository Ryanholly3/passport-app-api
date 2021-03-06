exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "passport_users"; ALTER SEQUENCE passport_users_id_seq RESTART WITH 5;')
    .then(function() {
      return knex("passport_users").insert([
        {
          id: 1,
          name: "Ryan Holly",
          email: "ryanholly@gmail.com",
          age: 26,
          gender: "male",
          homeCountry: "United States",
          bio: "I love to travel!"
        },
        {
          id: 2,
          name: "Chris Edgar",
          email: "verzetem@gmail.com",
          age: 28,
          gender: "male",
          homeCountry: "United States",
          bio: "I'm soft as cake, and I want to meet spicy fellows on my journeys!"
        },
        {
          id: 3,
          name: "Tyler Adams",
          email: "tadams9145@gmail",
          age: 27,
          gender: "male",
          homeCountry: "United States",
          bio: "I'm an eager clown looking for other eager clowns to travel with!"
        },
        {
          id: 4,
          name: "Son Phan",
          email: "sonvphan1@gmail",
          age: 28,
          gender: "male",
          homeCountry: "United States",
          bio: "Hard as steel! And I love to travel!"
        }
      ]);
    });
};

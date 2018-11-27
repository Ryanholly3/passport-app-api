exports.seed = function(knex, Promise) {
  return knex("passport-user")
    .del()
    .then(function() {
      return knex("passport-user").insert([
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
          id: 1,
          name: "Chris Edgar",
          email: "verzetem@gmail.com",
          age: 28,
          gender: "male",
          homeCountry: "United States",
          bio: "I'm soft as cake, and I want to meet spicy fellows on my journeys!"
        },
        {
          id: 1,
          name: "Tyler Adams",
          email: "tadams9145@gmail",
          age: 27,
          gender: "male",
          homeCountry: "United States",
          bio: "I'm an eager clown looking for other eager clowns to travel with!"
        },
        {
          id: 1,
          name: "Son Phamn",
          email: "sonvphan1@gmail",
          age: 28,
          gender: "male",
          homeCountry: "United States",
          bio: "Hard as steel! And I love to travel!"
        }
      ]);
    });
};

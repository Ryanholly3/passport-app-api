# My Passport Server

[Open Heroku Deployed Database](https://evening-refuge-33727.herokuapp.com)

View repository for front-end [HERE](https://github.com/Ryanholly3/passport-app-client).


## Required Installations

PostgreSQL using HomeBrew:
```sh
brew install postgresql
```

Start a PostgreSQL server as a Brew service:
```sh
brew services start postgresql
```


## Run the Project

On command line:

```sh
git clone git@github.com:Ryanholly3/passport-app-api.git
cd passport-app-api
npm install
createdb passport
knex migrate:latest
knex seed:run
npm start
```

Then visit http://localhost:3100/

## Routes
* http://localhost:3100/passport_users
* http://localhost:3100/destinations
* http://localhost:3100/visited
* http://localhost:3100/pins


## Technologies Used
* Node.js
* postgreSQL
* Express.js
* Knex.js

## Author
* [Tyler Adams](https://github.com/tadams9145)
* [Chris Edgar](https://github.com/verzetem)
* [Ryan Holly](https://github.com/Ryanholly3)
* [Son Phan](https://github.com/svphan1)

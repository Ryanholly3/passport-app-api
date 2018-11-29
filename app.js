const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const usersPath = require('./routes/passport_users')
const destinationsPath = require('./routes/destinations')
const visitedPath = require('./routes/visited')
const pinsPath = require('./routes/pins')
const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Passport App")
});

app.use('/passport_users', usersPath);
app.use('/destinations', destinationsPath);
app.use('/visited', visitedPath);
app.use('/pins', pinsPath);

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
  res.status(404).send({error: "Not found!", status: 404, url: req.originalUrl})
};

function errorHandler(err, req, res, next) {
  console.error("Error", err)
  const stack =  process.env.NODE_ENV !== "production" ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
};

app.listen(port, () => console.log(`Your port is on ${port}`));

const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res) => {
	knex('destination')
    .then(destinations => {
		  res.json({ destinations })
		})
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
	knex('destination')
    .where('id', id)
    .then(destination => {
      if(!destination.length){
        next()
      } res.json({ destination: destination[0] })
		})
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('destination')
      .insert(body)
      .returning('*')
      .then(destination => {
        res.json({ destination: destination[0] });
    });
});

router.put('/:id', (req, res, next) => {
		const id = req.params.id
    const body = req.body;
    knex('destination')
    	.where('id', id)
    	.update(body)
    	.returning('*')
    	.then(destination => {
        if(!destination.length){
          next()
        } res.json({ destination: destination[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('destination')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(destination => {
        if(!destination.length){
          next()
        } res.json({ destination: destination[0] });
    });
});

module.exports = router
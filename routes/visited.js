const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

router.get('/', (req, res) => {
	knex('visited')
    .then(visits => {
		  res.json({ visits })
		})
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
	knex('visited')
    .where('id', id)
    .then(visited => {
      if(!visited.length){
        next()
      } res.json({ visited: visited[0] })
		})
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('visited')
      .insert(body)
      .returning('*')
      .then(visited => {
        res.json({ visited: visited[0] });
    });
});

router.put('/:id', (req, res, next) => {
		const id = req.params.id
    const body = req.body;
    knex('visited')
    	.where('id', id)
    	.update(body)
    	.returning('*')
    	.then(visited => {
        if(!visited.length){
          next()
        } res.json({ visited: visited[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('visited')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(visited => {
        if(!visited.length){
          next()
        } res.json({ visited: visited[0] });
    });
});

module.exports = router
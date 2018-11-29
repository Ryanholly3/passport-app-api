const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

function getUsers(){
	return knex('passport_users')
		.select('*')
}

function getDestinationForUser(user){
	return knex('destination')
		.select(knex.raw('destination.id as destination_id, destination.latitude, destination.longitude, destination.country_code, destination.trip_detail'))
		.innerJoin('passport_users', 'passport_users.id', 'destination.passport_users_id')
		.whereIn('destination.passport_users_id', [user.id])
}

function getVisitedForUser(user){
	return knex('visited')
		.select(knex.raw('visited.id as visited_id, visited.latitude, visited.longitude, visited.country_code, visited.trip_detail'))
		.innerJoin('passport_users', 'passport_users.id', 'visited.passport_users_id')
		.whereIn('visited.passport_users_id', [user.id])
}

router.get('/', (req, res, next) => {

	function getUsersWithPassports(){
		return getUsers()
			.then(function(users){
				return Promise.all(users.map(async (user)=> {
						user.destinations = await getDestinationForUser(user)
						user.visited = await getVisitedForUser(user)
						return user
					})
				)
			}).then(users => res.json({ users }))
		}
	getUsersWithPassports()
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
	const intCheck = parseInt(id);

	function getUser(){
		return knex('passport_users')
			.select('*')
			.where('id', id)
	}

	function getUserWithTravels(){
		return getUser()
			.then(function(users){
				return Promise.all(users.map(async (user)=> {
						user.destinations = await getDestinationForUser(user)
						user.visited = await getVisitedForUser(user)
						return user
					})
				)
			}).then(user => {
					if(typeof intCheck === 'number' && user.length > 0){
						res.json({ user })
					} else {
						next()
					}
				})
	}
	getUserWithTravels()
})

router.get('/:id/destinations', (req, res, next) => {
  const id = req.params.id;
	const intCheck = parseInt(id);

	function getUser(){
		return knex('passport_users')
			.select('*')
			.where('id', id)
	}

	function getUserWithDestinations(){
		return getUser()
			.then(function(users){
				return Promise.all(users.map(async (user)=> {
						user.destinations = await getDestinationForUser(user)
						return user
					})
				)
			}).then(user => res.json({ user }))
	}
	getUserWithDestinations()
})


router.get('/:id/visited', (req, res, next) => {
  const id = req.params.id;
	const intCheck = parseInt(id);

	function getUser(){
		return knex('passport_users')
			.select('*')
			.where('id', id)
	}

	function getUserWithVisited(){
		return getUser()
			.then(function(users){
				return Promise.all(users.map(async (user)=> {
						user.visited = await getVisitedForUser(user)
						return user
					})
				)
			}).then(user => res.json({ user }))
	}
	getUserWithVisited()
})

router.post('/', (req, res, next) => {
    const body = req.body;
    knex('passport_users')
      .insert(body)
      .returning('*')
      .then(passport_user => {
        res.json({ passport_user: passport_user[0] });
    });
});

router.put('/:id', (req, res, next) => {
		const id = req.params.id
    const body = req.body;
    knex('passport_users')
    	.where('id', id)
    	.update(body)
    	.returning('*')
    	.then(passport_user => {
        if(!passport_user.length){
          next()
        } res.json({ passport_user: passport_user[0] });
    });
});

router.delete('/:id', (req, res, next) => {
		const id = req.params.id
    knex('passport_users')
    	.where('id', id)
			.del()
    	.returning('*')
    	.then(passport_user => {
        if(!passport_user.length){
          next()
        } res.json({ passport_user: passport_user[0] });
    });
});

module.exports = router

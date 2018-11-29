const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

function getUsersNameEmail(){
	return knex('passport_users')
		.select(knex.raw('passport_users.name as name, passport_users.id, passport_users.email'))
}

function getLatLong(pin){
	return knex('destination')
		.select(knex.raw('destination.latitude, destination.longitude'))
		.innerJoin('passport_users', 'passport_users.id', 'destination.passport_users_id')
		.whereIn('destination.passport_users_id', [pin.id])
}

router.get('/', (req, res, next) => {

	function getPins(){
		return getUsersNameEmail()
			.then(function(pins){
				return Promise.all(pins.map(async (pin)=> {
						pin.pins = await getLatLong(pin)
						return pin
					})
				)
			}).then(pins => res.json({ pins }))
		}
	getPins()
})

module.exports = router

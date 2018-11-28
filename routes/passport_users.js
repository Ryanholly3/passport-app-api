const express = require("express");
const router = express.Router();
const knex = require("../db/connection");

function getUsers(){
	return knex('passport_users')
		.select('*')
}

function getDestinationsForUser(user){
	return knex('destination')
		.select(knex.raw('destination.id as destination_id, destination.date, destination.distance, destination.difficulty, destination.notes'))
		.innerJoin('passport_users', 'passport_users.id', 'destination.passport_users_id')
		.whereIn('destination.passport_users_id', [user.id])
}

function getVisitedForUser(user){
	return knex('visited')
		.select(knex.raw('visited.id as visited_id, visited.date, visited.distance, visited.difficulty, visited.notes'))
		.innerJoin('passport_users', 'passport_users.id', 'visited.passport_users_id')
		.whereIn('visited.passport_users_id', [user.id])
}

module.exports = router
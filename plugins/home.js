'use strict'

const log = require('../lib/logger')
const homeObj = require('../public/assets/home-obj')

async function handleHomePage(req, reply){
    reply.view('/views/home/index', homeObj)//{text:'text'})
    // reply.send('home page')
}


module.exports = async function(fastify, opts, next){
    fastify.get('/', handleHomePage)
}
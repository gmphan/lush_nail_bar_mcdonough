'use strict'

const log = require('../lib/logger')

async function handleHomePage(req, reply){
    
    reply.send('home page')
}


module.exports = async function(fastify, opts, next){
    fastify.get('/', handleHomePage)
}
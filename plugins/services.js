'use strict'

const log = require('../lib/logger')

async function acrylicPageHandler(req, reply){
    reply.view('/views/services/index', {text:'text'})
    // reply.send('home page')
}


module.exports = async function(fastify, opts, next){
    fastify.get('/services', acrylicPageHandler)
}
'use strict'

const log = require('../lib/logger')
const priceList = require('../public/assets/price-list')

async function handleHomePage(req, reply){
    
    reply.view('/views/home/index', priceList)//{text:'text'})
    // reply.send('home page')
}


module.exports = async function(fastify, opts, next){
    fastify.get('/', handleHomePage)
}
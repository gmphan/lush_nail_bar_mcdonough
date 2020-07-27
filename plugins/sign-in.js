'use strict'

async function signInHandler(req, reply){
    reply.view('/views/sign-in/index', {'hello':'world'})
}

module.exports = async(fastify, opts, next)=>{
    fastify.get('/signin', signInHandler)
}
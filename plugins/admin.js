'use strict'

//thinking backward
/**
 * this page will show component below
 * upload photo
 * remove photos - this will be harder
 * re-arrange photo
 * hour
 * price
 */

 /**
  * upload photo
  * add/attach button - attach new photo
  * option to add multiple photos
  */

async function handleAdminPage(req, reply){
    reply.view('/views/admin/index', {text:'text'})
}

module.exports = async function(fastify, opts, next){
    fastify.get('/admin', handleAdminPage)
}
  
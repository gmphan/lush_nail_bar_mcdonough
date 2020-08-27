'use strict'
const db = require('../lib/db')

async function pricelistv2handler(){
    
    /**
     * query the price and put them in an object then return the object to the ajax call 
     */
    //connect to the db 
    // try{
    //     let sequelize = await db.init() //
    //     sequelize.authenticate()
    //     console.log('connected')
    // }catch(error){
    //     console.log('Unable to connecto the db:', error)
    // }
    // sequelize.close()

    try{
        await db.init()
        let test = await db.getModel()
        let res = await test.findAll()
        console.log(res)
    }catch(error){
        console.log(error)
    }

    return 0
}


module.exports = async function(fastify, opts, next){
    fastify.get('/price-list-v2', pricelistv2handler)
}
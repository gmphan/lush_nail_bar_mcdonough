'use strict'
const db = require('../lib/db')

async function pricelistv2handler(){
    let test
    try{
        const covid19consentModel = db.sequelize.models.covid_19_consents
        test = await covid19consentModel.findAll({
            where:{
                id:1
            }
        })
        
        // let res = await test.sequelize.models.covid_19_consents 
        // console.log(test)
    }catch(error){
        console.log(error)
    }

    return test
}


module.exports = async function(fastify, opts, next){
    fastify.get('/price-list-v2', pricelistv2handler)
}
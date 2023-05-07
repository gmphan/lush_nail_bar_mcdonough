'use strict'
const Sequelize = require('sequelize')
const configFactory = require('../config')
const logger = require('./logger')
const models = require('./models')
const fs = require('fs')
const path = require('path')

const implementation = {}
implementation.modelList = {}

let sequelize, config, log



async function init(){
    try{
        /**
         * go through each model.js then get name for the instant variable and child class 
         * get attribute objects 
         * get other option object 
         */
        await models.init() //export models
        config = await configFactory()
        log = await logger()
        sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
            host: config.db.host,
            dialect:'postgres',
            logging:msg => log.info(msg), 
            force:false //= true //if there is no table, it will create one
        })

        implementation.sequelize = sequelize
        
        const files = fs.readdirSync(path.join(__dirname, 'models'))
        for(let file of files){
            if(file !== 'index.js'){
                const filePath = path.join(__dirname, 'models', file)
                const name = path.parse(filePath).name
                implementation.modelList[name] = sequelize.define(
                    models[name].tableName,
                    models[name].attributes,
                    models[name].otherOptions
                )      
            }
        }
        // console.log(implementation)
        // const test = await implementation.sequelize.models.covid_19_consents
        // console.log(await test.findAll())
        

    }catch(err){
        console.error(err.stack)
        process.exit(1)
    } 

}


// !(async()=>{
//     await init()
// })()

implementation.init = init
module.exports = implementation

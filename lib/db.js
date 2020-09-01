'use strict'
const Sequelize = require('sequelize')
const configFactory = require('../config')
const logger = require('./logger')
const models = require('./models')
const fs = require('fs')
const path = require('path')

const implementation = {}
// module.exports = implementation
implementation.model = {}

let sequelize, config, log



async function init(){
    try{
        console.log(models)
        config = await configFactory()
        log = await logger()
        sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
            host: config.db.host,
            dialect:'postgres',
            logging:msg => log.info(msg), //more options here https://sequelize.org/master/manual/getting-started.html
            force:false //= true //if there is no table, it will create one
        })

        implementation.sequelize = sequelize

        const files = fs.readdirSync(path.join(__dirname, 'models'))
        for(let file of files){
            if(file !== 'index.js'){
                const filePath = path.join(__dirname, 'models', file)
                const name = path.parse(filePath).name
                // implementation.model[name] = sequelize.define(
                //     models[name].tableName,
                //     models[name].attributes
                // )
                // console.log(models[name])
            }
        }
        

    }catch(err){
        console.error(err.stack)
        process.exit(1)
    } 

}


!(async()=>{
    await init()
})()




'use strict'
const {Sequelize, DataTypes, Model} = require('sequelize')
const configFactory = require('../config')
const logger = require('./logger')

let sequelize, config, log
const db = {
    init: async function(){
        config = await configFactory()
        log = await logger()
        //create sequelize instance to connect to the database
        sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
            host: config.db.host,
            dialect:'postgres',
            logging:msg => log.info(msg), //more options here https://sequelize.org/master/manual/getting-started.html
            force:true //if there is no table, it will create one
        })
    },
    getModel: async function(req){
        let model = require('./models')(req)
        return model
    }
    // async function(){
    //     class covid19consent extends Model{}
    //     return covid19consent.init({
    //         // attributes
    //         customer_name:{
    //             type:DataTypes.STRING,
    //             allowNull: false
    //         },
    //         consent_form:{
    //             type:DataTypes.TEXT,
    //             allowNull:true
    //         }
    //     },{
    //         sequelize,
    //         timestamps:true,
    //         createdAt:'created_date',
    //         updatedAt:'updated_date',
    //         modelName:'covid_19_consents',
    //         freezeTableName: true //force the table name = modelName
    //     })
    // }
}

module.exports=db




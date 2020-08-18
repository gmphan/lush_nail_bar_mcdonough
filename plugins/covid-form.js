'use strict'

const {Sequelize, DataTypes, Model} = require('sequelize')
const configF                       = require('../config')
const logger                        = require('../lib/logger')
const path                          = require('path')
const fs                            = require('fs')
const covid19consentF               = require('../public/assets/covid19consent')

let sequelize, config, log, htmlObj, inputObj
let initInputObj = 'NA' 
async function handleCovidForm(req, reply){
    //get html
    htmlObj = await covid19consentF(initInputObj)
    return reply.view('/views/covid-form/index', htmlObj)    
}

async function handleCovidFormPost(req, reply){

    /**Need to create a new input Obj
     * Get input from a user for each field and post to the server as an Obj
     * Now I need to replace the initial values of inputObj in covid19consent.js by the new values/inputs from a user
     * To do that, I need to get the key of the post object, so I can get the values base on the key index because the index should be in order
     * so that when I replace the values from the initial inputObj, I can use index of its keys, too
     * Next, I need to get the initial inputObj then get its keys.
     * From both key arrays, I now create a new object with new values for new html for saving.
     * THE CORE of all this: the new object will use initial inputObj's keys as its keys, and will take in a user inputs/values as its values
     */

    //post obj
    let postObj = req.body.dataK
    let postObjKeys = Object.keys(postObj)

    //get inputObj from covid19consent.js
    htmlObj= await covid19consentF(initInputObj)    
    inputObj = htmlObj.htmlInput
    let inputObjKeys = Object.keys(inputObj)
    
    
    //make new consent obj to get new html file
    let newInputObj = {}
    for(let index in postObjKeys){
        newInputObj[inputObjKeys[index]] = postObj[postObjKeys[index]]    
    }
    
    //get the new html of the form with new values
    htmlObj = await covid19consentF(newInputObj)
    let newConsentHtml = htmlObj.html

    //save the record into the database
    sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
        host:config.db.host,
        dialect:'postgres',
        logging:false,
        force:true //if there is no table, it will create one
    })
    let consentAbstraction = await abstractTable()
    
    let consentObj = {
        customer_name:newInputObj[inputObjKeys[0]],
        consent_form:newConsentHtml
    }

    await createNewRecord(consentAbstraction, consentObj)
    
    return true
}

//create new record
async function createNewRecord(table, obj){
     await table.create({
         customer_name:obj.customer_name,
         consent_form: obj.consent_form
     }).then((res)=>{
         log.info('a record was created: %j', res.dataValues.customer_name)
     })
}

async function abstractTable(){
    class covid19consent extends Model{}
    return covid19consent.init({
        // attributes
        customer_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        consent_form:{
            type:DataTypes.TEXT,
            allowNull:true
        }
    },{
        sequelize,
        timestamps:true,
        createdAt:'created_date',
        updatedAt:'updated_date',
        modelName:'covid_19_consents'
    })
}

module.exports = async(fastify, opts, next)=>{
    config = await configF()
    log = await logger()
    fastify.get('/covid-form', handleCovidForm)
    fastify.post('/covid-form', handleCovidFormPost)
    
}
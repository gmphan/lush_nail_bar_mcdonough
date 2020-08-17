'use strict'

/**
 * what to do:
 * * Use webshot npm - use html option
 * * in the index.marko should only have div and submit button
 * * submit button will call the webshot and bring parameters to the plugin
 * * need to think of a way, so that submit will dynamically pick up the parameters in case new parameters added
 * * when the page is visited, the plugin should inject that form into the page, so that the plugin and the page always have the same form even when things change
 * * I should create the form as a assest, for later modification.
 * * when the submit button click, the parameter will be inquery to the plugin, from there, I will need to inject those paramater in place before webshot take the picture of the html
 */

const {Sequelize, DataTypes, Model} = require('sequelize')
const configF                       = require('../config')
const logger                        = require('../lib/logger')
const path                          = require('path')
const fs                            = require('fs')
const { stdout } = require('process')
const { Stream } = require('stream')
const covid19consentF                     = require('../public/assets/covid19consent')

let sequelize, config, log, htmlObj

async function handleCovidForm(req, reply){

    //get html
    htmlObj = await covid19consentF()
    // console.log(htmlObj)

    
    //inserting new records
    sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
        host:config.db.host,
        dialect:'postgres',
        logging:false,
        force:true //if there is no table, it will create one
    })
    let consentAbstraction = await abstractTable()
    
    //this part will be from user
    let consentObj = {
        first_name:'Giang',
        last_name:'Phan',
        phone_number: '',
        email:'',
        consent_form:''
    }

    // await createNewRecord(consentAbstraction, consentObj)


    return reply.view('/views/covid-form/index', htmlObj)
}

async function handleCovidFormPost(req, reply){
    console.log(req.body.dataK)
    
    return 0
}

// function getHtml(){
//     return new Promise((resolve, reject)=>{
//         let path2html = path.join(__dirname, '../public/assets/', 'covid19consent.html')
//         let html = fs.readFileSync(path2html, {encoding:'utf8', flag:'r'})
//         console.log(html)
//         //htmlStream.pipe(process.stdout)
//         // stream.pipeline(htmlBuffer)
//         return resolve(html)
//     }).catch(err=>{
//         throw err
//     })
// }

//create new record
async function createNewRecord(table, obj){
     await table.create({
         first_name: obj.first_name,
         last_name: obj.last_name,
         phone_number: obj.phone_number,
         email: obj.email,
         consent_form: obj.consent_form
     }).then((res)=>{
         log.info('a record was created: %j', res.dataValues.first_name)
     })
}

async function abstractTable(){
    class covid19consent extends Model{}
    return covid19consent.init({
        // attributes
        first_name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone_number:{
            type:DataTypes.NUMBER,
            allowNull:true 
        },
        email:{
            type:DataTypes.STRING,
            allowNull:true 
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
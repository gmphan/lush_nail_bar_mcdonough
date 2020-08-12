'use strict'

const log = require('./logger')()
//const fastify = require('fastify')({logger:log}) //to turn off logger to see other log for testing use ({logger:false})
const fastifyFactory = require('fastify')
const path = require('path')
const dir = require('node-dir')
const lasso = require('lasso')
const configF = require('../config.js')
require('marko/node-require');


const pem = require('pem')

let fastify, config

function createCertificate(){
    return new Promise((resolve, reject)=>{
        pem.createCertificate({days:1, selfSigned:true}, (err, keys)=>{
            if (err) return reject(err)
            return resolve(keys)
        })
    })
}


const server = {}

server.start = async function(){
    config = await configF()
    const keys = await createCertificate()

    fastify = fastifyFactory({
        //temporary turn https off due to warning message that might make people scare
        // https:{
        //     key:keys.serviceKey,
        //     cert:keys.certificate
        // },
        logger:log
    })

    /** "point-of-view" to serve "marko" template engine */
    fastify.register(require("point-of-view"),{
        engine:{
            marko:require("marko") 
        },
        includeViewExtension: true //to omit view extension (no need .marko at end of index.marko)
    })

    // bundle up all CSS, LESS, and JS assets
    //remember to npm install @lasso/marko-taglib so marko can recognize lasso tag
    require('marko/compiler').defaultOptions.writeToDisk = false;  //to stop marko to output index.makro.js into the same folder
                                                                   //so lasso can output the bundle into static folder
    lasso.configure({
        outputDir: path.join(__dirname, '..', 'public', 'static'),
        urlPrefix: '/public/static',
        plugins: ['lasso-marko', 'lasso-less']
    })
    log.trace('finished lasso initialization')

    // serve all the static files; all of /public
    await fastify.register(require('fastify-static'), {
        root: path.join(__dirname, '..', 'public'),
        prefix: '/public/',
    })
    log.trace('finished static files initialization')

    /**Register Plugins */
    const pluginFiles = await dir.promiseFiles(path.join(__dirname, '../', 'plugins'))
    for(let file in pluginFiles){
       await fastify.register(require(pluginFiles[file]))
    }

    await fastify.listen(config.serverPort, '0.0.0.0')
    fastify.log.info(`server is listening on port ${fastify.server.address().port}`)
    return fastify
}


module.exports = server


'use strict'

const log = require('./logger')()
const fastify = require('fastify')()//({logger:log})
const path = require('path')
const dir = require('node-dir')
const lasso = require('lasso')
const config = require('../config.js')

const server = {}

server.start = async function(){
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
    // fastify.log.info(`server is listening on port ${fastify.server.address().port}`)
    return fastify
}


module.exports = server


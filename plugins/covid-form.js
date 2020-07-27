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


async function handleCovidForm(req, reply){
    
    reply.view('/views/covid-form/index', {})
}

module.exports = async(fastify, opts, next)=>{
    fastify.get('/covid-form', handleCovidForm)
}
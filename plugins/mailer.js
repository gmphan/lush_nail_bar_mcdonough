'use strict'

const logger = require('../lib/logger')
const nodemailer = require('nodemailer')
const config = require('../config')

async function mailHandler(req, reply){
    // console.log(req.body.dataK)
    let reqData = req.body.dataK

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(config.gmail)

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: ``+reqData.name+` , <`+reqData.email+`>`, //not really matter 
        to: 'lushnailbarmcdonoughga@gmail.com',//, baz@example.com', // list of receivers
        subject:'Message from: '+ reqData.email, // Subject line
        // text: reqData.message // plain text body
        html: `<b>Customer name: `+reqData.name+`</b><br/><p>`+reqData.message+`</p>` // html body
    }, (err)=>{
        if(err){
            return 0
        }
    });
    return 1
}

module.exports = async(fastify, opts, next)=>{
    fastify.post('/mailer', mailHandler)
}
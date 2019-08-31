'use strict'

const logger = require('../lib/logger')
const nodemailer = require('nodemailer')
const config = require('../config')

async function mailHandler(req, reply){
    console.log(req.body.dataK)
    let reqData = req.body.dataK


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(config.gmail)

    // send mail with defined transport object
    let info = await transporter.sendMail({
        // from: reqData.email,
        to: 'lushnailbarmcdonoughga@gmail.com',//, baz@example.com', // list of receivers
        subject: 'message from ' + reqData.email, // Subject line
        // text: reqData.message // plain text body
        html: `<b>'Customer name: '`+reqData.name+`</b><br/><p>`+reqData.message+`</p>` // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return{res:1}
}

module.exports = async(fastify, opts, next)=>{
    fastify.post('/mailer', mailHandler)
}
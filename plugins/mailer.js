'use strict'

const logger = require('../lib/logger')
const nodemailer = require('nodemailer')
const config = require('../config')
const aws = require('aws-sdk')

async function mailHandler(req, reply){
    // console.log(req.body.dataK)
    let reqData = req.body.dataK

    // aws.config.getCredentials(function(err){
    //     if(err) console.log(err.stack)
    //     else{
    //         console.log("Access key:", aws.config.credentials.accessKeyId);
    //         console.log("Secret access key:", aws.config.credentials.secretAccessKey);
    //     }
    // })
    

    // configure AWS SDK
    aws.config.loadFromPath('config.json')
    let ses = new aws.SES()

    console.log("Access key:", aws.config.credentials.accessKeyId);
    console.log("Secret access key:", aws.config.credentials.secretAccessKey);

    let email = 'lushnailbarmcdonoughga@gmail.com'

    var ses_mail = "From: 'AWS Tutorial Series' <" + email + ">\n";
    ses_mail = ses_mail + "To: " + email + "\n";
    ses_mail = ses_mail + "Subject: AWS SES Attachment Example\n";
    ses_mail = ses_mail + "MIME-Version: 1.0\n";
    ses_mail = ses_mail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
    ses_mail = ses_mail + "This is the body of the email.\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/plain;\n";
    ses_mail = ses_mail + "Content-Disposition: attachment; filename=\"attachment.txt\"\n\n";
    ses_mail = ses_mail + "AWS Tutorial Series - Really cool file attachment!" + "\n\n";
    ses_mail = ses_mail + "--NextPart--";

    var params = {
        RawMessage: { Data: new Buffer(ses_mail) },
        Destinations: [ email ],
        Source: "'AWS Tutorial Series' <" + email + ">'"
    }
    
    ses.sendRawEmail(params, function(err, data) {
        if(err) {
            console.log(err.stack)
        } 
        else {
            console.log('yes')
        } 
    })         


    // // create Nodemailer SES transporter
    // let transporter = nodemailer.createTransport({
    //     SES: new aws.SES(),
    //     sendingRate: 1 // max 1 messages/second
    // });

    // // send some mail
    // transporter.sendMail({
    //     from: ``+reqData.name+` , <`+reqData.email+`>`,
    //     to: 'lushnailbarmcdonoughga@gmail.com',//'gmphan7@gmail.com',
    //     subject: 'Message',
    //     text: 'I hope this message gets sent!',
    //     ses: { // optional extra arguments for SendRawEmail
    //         Tags: [{
    //             Name: 'tag name',
    //             Value: 'tag value'
    //         }]
    //     }
    // }, (err, info) => {
    //     // console.log(info.envelope);
    //     // console.log(info.messageId);
    // });

    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport(config.gmail)

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //     from: ``+reqData.name+` , <`+reqData.email+`>`, //not really matter 
    //     to: 'gmphan7@gmail.com',//'lushnailbarmcdonoughga@gmail.com',//, baz@example.com', // list of receivers
    //     subject:'Message from: '+ reqData.email, // Subject line
    //     // text: reqData.message // plain text body
    //     html: `<b>Customer name: `+reqData.name+`</b><br/><p>`+reqData.message+`</p>` // html body
    // }, (err)=>{
    //     if(err){
    //         return 0
    //     }
    // });
    return 1
}

module.exports = async(fastify, opts, next)=>{
    fastify.post('/mailer', mailHandler)
}
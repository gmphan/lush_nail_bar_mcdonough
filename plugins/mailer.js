'use strict'

const logger = require('../lib/logger')
const nodemailer = require('nodemailer')
const configF = require('../config')
const aws = require('aws-sdk')

async function mailHandler(req, reply){
    // console.log(req.body.dataK)
    let reqData = req.body.dataK    

    // configure AWS SDK
    aws.config.loadFromPath('config.json')
    let ses = new aws.SES()
    let email = 'lushnailbarmcdonoughga@gmail.com'
    let ses_mail = "From: 'Lushnailbar-mcdonough.com - message' <" + email + ">\n";
    ses_mail = ses_mail + "To: " + email + "\n";
    ses_mail = ses_mail + "Subject: A message for LUSH-NAIL-BAR\n";
    ses_mail = ses_mail + "MIME-Version: 1.0\n";
    ses_mail = ses_mail + "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
    // ses_mail = ses_mail + "This is the body of the email.\n\n";
    /** body email can go here, but it is tricky because it follows html 
     * rule which make the req message displayed messy since it doesn't contain
     * html tags. Therefore I am using attachment for now. 
     * Will come back to implement nodeemail again
     */
    ses_mail = ses_mail + "--NextPart\n";
    ses_mail = ses_mail + "Content-Type: text/plain;\n";
    ses_mail = ses_mail + "Content-Disposition: attachment; filename=\"attachment.txt\"\n\n";
    // ses_mail = ses_mail + "AWS Tutorial Series - Really cool file attachment!" + "\n\n";
    ses_mail = ses_mail + "Customer name: "+reqData.name+" \n\n";
    ses_mail = ses_mail + "Customer email: "+reqData.email+" \n\n";
    ses_mail = ses_mail + "Customer phone: "+reqData.phone+" \n\n";
    ses_mail = ses_mail + "Customer message: "+reqData.message
    ses_mail = ses_mail + "--NextPart--";

    var params = {
        RawMessage: { Data: new Buffer.from(ses_mail) },
        Destinations: [ email ],
        Source: "'lushnailbar-mcdonough.com/message' <" + email + ">'"
    }
    
    let result = await sendRawEmail(ses, params)
    return result

}

function sendRawEmail(ses, params){
    return new Promise((resolve, reject)=>{
        ses.sendRawEmail(params, function(err, data) {
            if(err) {
                console.log(err.stack)
                return resolve(false)
            } 
            else {
                return resolve(true)
            } 
        })         
    })
}


module.exports = async(fastify, opts, next)=>{
    let config = await configF()
    fastify.post('/mailer', mailHandler)
}
'use strict'

const log = require('../lib/logger')

async function handleHomePage(req, reply){
    let priceList = {
        acrylic:{
            'Acrylic Full Set'              : '$25+',
            'Acrylic Fill In'               : '$18+',
            'Acrylic Ombre Full Set'        : '$40+',
            'Acrylic Ombre Fill in'         : '$30+',
            'Gel Powder Full Set'           : '$32+',
            'Gel Powder Fill in'            : '$22+',
            'Pink & White Full Set'         : '$45+',
            'Pink & White Fill - In'        : '$38+',
            'Pink Powder Full Set'          : '$35+',
            'Pink Powder Fill in'           : '$27+',
            'Gel Polish w/Acrylic Full Set' : '$10+'  
        },
        sns:{
            'SNS on Real Nails'             : '$30+',
            'SNS add-on Tips'               : '$35+',
            'SNS French'                    : '$35+',
            'SNS Full Set'                  : '$35+',
            'SNS Ombre'                     : '$45+',
            'SNS Full Set Ombre'            : '$50+'
        }
    }
    reply.view('/views/home/index', priceList)//{text:'text'})
    // reply.send('home page')
}


module.exports = async function(fastify, opts, next){
    fastify.get('/', handleHomePage)
}
'use strict'
const path = require('path')
const fs    = require('fs')
const log = require('../lib/logger')
const thumb = require('node-thumbnail').thumb

async function handleHomePage(req, reply){

    const galleryPath = path.join(__dirname, '../public/assets/img', 'gallery')
    const gallery = fs.readdirSync(galleryPath)  
    // console.log(photos)
    for(let photo of gallery){
        const photoPath = path.join(__dirname, '../public/assets/img', 'gallery', photo) 
        const photoName = path.parse(photoPath).name 
        // await thumb({
        //     suffix: '',
        //     width: '100',
        //     source: photoPath,
        //     destination:path.join(__dirname, '../public/assets/img/portfolio', 'thumbnails')
        // }).then(async function(){
        //     await cpToGllry(photo)
        //     await rmPhoto(photo)
        // })
        
        
        console.log(photoName)
    }


    reply.view('/views/gallery/index', {text:'text'})
    // reply.send('home page')
}


module.exports = async function(fastify, opts, next){
    fastify.get('/gallery', handleHomePage)
}
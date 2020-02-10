'use strict'
const path = require('path')
const fs    = require('fs')
const log = require('../lib/logger')
const thumb = require('node-thumbnail').thumb

async function handleHomePage(req, reply){    
    const uPath = path.join(__dirname, '../public/assets/img', 'upload')
    const uPhotos = fs.readdirSync(uPath)  
    
    /**
     * if there are photos in upload folder then
     * go through and covert each photo into a thumbnail
     * . The thumnails are moved to public/assets/img/portfolio/thumnails folder, and 
     * the original photo are moved to public/assets/img/gallery folder
     */
    if(uPhotos.length){        
        for(let photo of uPhotos){
            if(photo !== '.gitkeep'){
                // console.log(photo)
                let photoPath = path.join(__dirname, '../public/assets/img', 'upload', photo) 
                const gPath = path.join(__dirname, '../public/assets/img', 'gallery', photo) 
                let photoName = path.parse(photoPath).name             
                await thumb({
                    suffix: '',
                    width: '200',
                    overwrite: true,
                    source: photoPath,
                    destination: path.join(__dirname, '../public/assets/img/portfolio', 'thumbnails')
                })
                .then(async function(){
                    await mvPhotos(photoPath, gPath)
                })            
            }
            
        }
    }
    const galleryPath = path.join(__dirname, '../public/assets/img/', 'gallery')
    const photoNames = fs.readdirSync(galleryPath) 
    // render gallery page and send all photo names from gallery to it
    reply.view('/views/gallery/index', {photoNam:photoNames})
}


async function mvPhotos(oldPath, newPath){
    console.log(newPath)

    //this is rename but also move the file over
    fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        console.log('Rename complete!');
      });   
    return 1
}


module.exports = async function(fastify, opts, next){
    fastify.get('/gallery', handleHomePage)
}
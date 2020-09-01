'use strict'

const fs = require('fs')
const path = require('path')

const implementation = {}

implementation.init = async function () {

  const files = fs.readdirSync(__dirname)
  for (let f of files) {
    if (f !== 'index.js') {
      const filePath = path.join(__dirname, f)
      const name = path.parse(filePath).name
      implementation[name] = require(filePath)        
    }    
  }
  console.log(implementation)
}

!(async()=>{
    // console.log('hello')
    // console.log(implementation)
    await implementation.init()
})().catch(err=> console.error(err.message))
// module.exports = implementation

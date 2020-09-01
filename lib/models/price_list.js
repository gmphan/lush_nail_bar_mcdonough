'use strict'

const Sequelize = require('sequelize')
const implementation = {}

implementation.tableName = 'price_list'

implementation.attributes = {
    service:{
        type:Sequelize.STRING
    },
    type:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.STRING
    }
}

module.exports = implementation


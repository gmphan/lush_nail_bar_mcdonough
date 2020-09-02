'use strict'

const Sequelize = require('sequelize')
const implementation = {}

implementation.tableName = 'covid_19_consents'

implementation.jsonSchema = {
    type:'object',
    properties: {}
}

implementation.attributes = {
    customer_name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    consent_form:{
        type:Sequelize.TEXT,
        allowNull:true
    }
}
implementation.otherOptions = {
    timestamps:true,
    createdAt:'created_date',
    updatedAt:'updated_date',
    modelName:'covid_19_consents'
}

module.exports = implementation
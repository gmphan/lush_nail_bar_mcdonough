'use strict'

const { Model } = require("sequelize/types")

//this file will return a table modle by demand

models = {
    covid_19_consents: async function(){
        class covid19consent extends Model{}
        return covid19consent.init({
            // attributes
            customer_name:{
                type:DataTypes.STRING,
                allowNull: false
            },
            consent_form:{
                type:DataTypes.TEXT,
                allowNull:true
            }
        },{
            sequelize,
            timestamps:true,
            createdAt:'created_date',
            updatedAt:'updated_date',
            modelName:'covid_19_consents',
            freezeTableName: true //force the table name = modelName
        })
    }
}

module.exports= async function(req){
    let model = models[req]
    return model
}
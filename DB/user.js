const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create schema and Model 
const Person_Prototype = new Schema({
    name : String ,
    age : Number,
    favoriteFoods : [ String ]
})

const Person = mongoose.model('PersonPrototype',Person_Prototype)
module.exports = Person
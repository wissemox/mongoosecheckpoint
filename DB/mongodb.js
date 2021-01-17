
const mongoose = require('mongoose')
const URI = "'mongodb://localhost/mol"
const contextDb=async()=>{
    await mongoose.connect(URI,{useNewUrlParser: true,useUnifiedTopology: true})
    console.log('seruver contected')
}
module.exports = contextDb
//export
const exprese = require('express')
const app = exprese()
const contextDb = require('./DB/mongodb')
const person = require('./DB/user')

contextDb()
//done
let msg = new person({
    name : "mohamed" , 
    age : 20 ,
    favoriteFoods: ["orange","frazd"]
})
//save to the data 
msg.save().then(doc=>{
    console.log(doc)
}).catch(err=>{
    console.log(err)
})
//find 
person.find().then(doc=>{
    console.log("find")
    console.log(doc)
}).catch(err=>{
    console.error(err)
})
//create
var array =[{
    name : "molha",
    age : 25 ,
    favoriteFoods : ["zdazd","okj"]
}]
person.create(array).then(doc=>{
    console.log(doc)
})
//find only one name 
person.findOne({name:"molha"}).then(doc=>{
    console.log(doc)
}).catch(err=>{
    console.log(err)
})
//find person by id 
var id = "60030455d2d2274478ac84eb"
person.findById(id).then(doc=>{
    console.log(doc)
}).catch(err=>{
    console.log(err)
})
//find person edit and save
//jarb bil find mahbtch ta5dm

person.findOne({name:"molha"}).then(doc=>{
    doc.name="wissemox"
    doc.favoriteFoods.push("hamburger")
    console.log(doc)
    doc.save((error,updata)=>{
        console.log(updata)
    })
}).catch(err=>{
    console.log(err)
})

//Update 
person.findOneAndUpdate({name:"wissemox"},{age:15}).then(doc=>{
    console.log('updateone',doc)
}).catch(err=>{
    console.log(err)
})
//find use by id and remove it 
var id  = '6003052f8ee47c31d00f25a5'
person.findByIdAndRemove(id).then(
    doc=>{
        console.log('remover',doc)
    }
)
//remove all 
person.remove({name:"mohamed"}).then(
    doc=>{
        console.log("name removed :",doc)
    }
).catch((err)=>console.log(err))

// chaine serach 
person.find({favoriteFoods : {$all : ["hamburger" ]} }).sort({age:'asc'})
.limit(4)
.select('name age')
.exec((error,data)=>{
    if(!error){
        console.log("arryfovaoirat food",data)
    }
})

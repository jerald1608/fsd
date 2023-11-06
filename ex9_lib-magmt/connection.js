const mongoose=require('mongoose')//Object Data Model
const connect=mongoose.connect("mongodb://127.0.0.1:27017/test")
module.exports=connect
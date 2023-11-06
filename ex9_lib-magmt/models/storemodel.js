const mongoose=require('mongoose')
storeschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        value:{
            type:Number,
            required:true
        }
    }
)
Store=mongoose.model("Store",storeschema)
module.exports=Store
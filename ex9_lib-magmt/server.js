const express=require('express')
const connect=require("./connection")
const router=require("./router")
const cors=require('cors')


const app=express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//stores routing point or target hit
app.use("/stores",router)

connect.then(()=>{
    console.log("MongoDB is Connected")
    app.listen(3000,()=>{
        console.log("Server is started at localhost:3000")
    })
}).catch((error)=>{
    console.log(error)
})
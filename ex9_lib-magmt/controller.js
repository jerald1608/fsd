const Store=require("./models/storemodel")

async function fetchAll(req,res){
    try{
        stores=await Store.find();
        res.status(200).json(stores)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
async function fetchById(req,res){
    const {id}=req.params
    try{
        store=await Store.findById(id);
        res.status(200).json(store)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
async function addDetails(req,res){
    try{
        store=await Store.create(req.body)
        res.status(200).json(store)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

async function updateDetails(req,res){
    const {id}=req.params
    try{
        store=await Store.findByIdAndUpdate(id,req.body,{new:true});
        if(!store)
        {
            return res.status(400).json({message:`id is not found$id`})
        }
        res.status(200).json(store)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
async function deleteDetails(req,res){
    const {id}=req.params
    try{
        store=await Store.findByIdAndDelete(id,req.body,{new:true});
        if(!store)
        {
            return res.status(400).json({message:`id is not found$id`})
        }
        res.status(200).json(store)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
module.exports={fetchAll,fetchById,addDetails,updateDetails,deleteDetails}
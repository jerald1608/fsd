const express=require('express')
const {fetchAll,fetchById,addDetails, updateDetails,deleteDetails}=require('./controller')

router=express.Router()
router.get("/",fetchAll)
router.get("/:id",fetchById)
router.post("/",addDetails)
router.put("/:id",updateDetails)
router.delete("/:id",deleteDetails)

module.exports=router
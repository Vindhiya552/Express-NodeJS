//create variable for express
const express = require("express");
const router=express.Router();

const studentcontroller =require("../Controllers/studentcontroller");
//view all record
router.get('/getuser',studentcontroller.view);

//add new record
// router.get('/createuser',studentcontroller.save);
router.post('/createuser',studentcontroller.save);
 

//Update record
// router.get("/edituser/:id",studentcontroller.edituser);
router.post("/updateuser",studentcontroller.edit);

 
//Delete record
router.post("/deleteuser",studentcontroller.delete);


//  router.get('',(req,res)=>{
//      res.render("home");
// });

module.exports=router;
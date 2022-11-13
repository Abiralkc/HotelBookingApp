import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifytoken.js";


const router = express.Router();


//Authentication and Authorization
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user you are logged in and you can delete account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all account")
// })

//update

router.put("/:id",verifyUser, updateUser)

//Deleted

router.delete("/:id",verifyUser, deleteUser);



//GET_ONE

router.get("/:id",verifyUser,getUser);

//GET_ALL

router.get("/",verifyAdmin, getUsers)





export default router

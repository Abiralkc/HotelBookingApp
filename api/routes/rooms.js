import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifytoken.js";


const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update

router.put("/:id",verifyAdmin,updateRoom)

//Deleted

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);



//GET_ONE

router.get("/:id",getRoom);

//GET_ALL

router.get("/",getRooms)

export default router

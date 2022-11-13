import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//update

router.put("/:id",verifyAdmin,updateHotel)

//Deleted

router.delete("/:id",verifyAdmin, deleteHotel);



//GET_ONE

router.get("/:id",getHotel);

//GET_ALL

router.get("/",getHotels)


export default router

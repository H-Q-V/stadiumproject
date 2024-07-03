const express = require("express");
const stadiumControllers = require("../controllers/stadiumControllers");;
const router = express.Router();


//router.route("/").get(stadiumControllers.getAllStadium).post(stadiumControllers.createNewStadium);
//router.route("/:id").get(stadiumControllers.getStadiumById);
router.post("/add",stadiumControllers.createNewStadium);
router.get("/all",stadiumControllers.getAllStadium);
router.get("/:id", stadiumControllers.getStadiumById);
module.exports = router;
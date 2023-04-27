const { addTrip, getTripById } = require("./trip.controller");
const router = require("express").Router();
router.post("/addTrip", addTrip);
router.get("/getTripById", getTripById);
module.exports = router;
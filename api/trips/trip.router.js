const { createUser, getTripById } = require("./trip.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getTripById);
module.exports = router;
const { createUser, getUserById } = require("./trip.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getUserById);
module.exports = router;
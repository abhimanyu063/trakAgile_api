const { createUser, getUserById } = require("./site.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getUserById);
module.exports = router;
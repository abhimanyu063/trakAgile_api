const { createUser, getSiteWorkById } = require("./sitework.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getSiteWorkById);
module.exports = router;
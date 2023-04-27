const { createUser, getSiteById } = require("./site.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getSiteById);
module.exports = router;
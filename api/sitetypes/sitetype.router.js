const { createUser, getSiteTypeById } = require("./sitetype.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getSiteTypeById);
module.exports = router;
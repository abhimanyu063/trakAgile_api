const { createUser, getWorkTypeById } = require("./worktype.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getWorkTypeById);
module.exports = router;
const { createUser, getDistrictById } = require("./district.controller");
const router = require("express").Router();
router.post("/", createUser);
router.get("/", getDistrictById);
module.exports = router;
const { addDistrict, getDistrictById } = require("./district.controller");
const router = require("express").Router();
router.post("/districts/addDistrict", addDistrict);
router.get("/districts/getDistrictById", getDistrictById);
module.exports = router;
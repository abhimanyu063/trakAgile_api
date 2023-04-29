const { addDistrict, getDistrictById } = require("./district.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./district.swagger-path-details");

router.post("/districts/addDistrict", addDistrict, objectPayload);
router.get("/districts/getDistrictById", getDistrictById, parameterPayload);

module.exports = router;
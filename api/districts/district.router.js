const router = require("express").Router();
const { addDistrict, getDistricts } = require("./district.controller");
const { objectPayload, getlist } = require("./district.swagger-path-details");

router.post("/districts/addDistrict", addDistrict, objectPayload);
router.get("/districts/getDistricts", getDistricts, getlist);

module.exports = router;
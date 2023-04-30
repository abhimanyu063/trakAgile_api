const router = require("express").Router();
const districtController = require("./district.controller");
const { objectPayload, getlist } = require("./district.swagger-path-details");

router.post("/districts/addDistrict", districtController.addDistrict, objectPayload);
router.get("/districts/getDistricts", districtController.getDistricts, getlist);

module.exports = router;
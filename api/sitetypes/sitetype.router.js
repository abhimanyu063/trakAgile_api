const { addSiteType, getSiteTypes } = require("./sitetype.controller");
const router = require("express").Router();
const { objectPayload, getlist } = require("./sitetype.swagger-path-details");

router.post("/sitetypes/addSiteType", addSiteType, objectPayload);
router.get("/sitetypes/getSiteTypes", getSiteTypes, getlist);

module.exports = router;
const router = require("express").Router();
const siteTypeController= require("./sitetype.controller");
const { objectPayload, getlist } = require("./sitetype.swagger-path-details");

router.post("/siteTypes/addSiteType", siteTypeController.addSiteType, objectPayload);
router.get("/siteTypes/getSiteTypes", siteTypeController.getSiteTypes, getlist);

module.exports = router;
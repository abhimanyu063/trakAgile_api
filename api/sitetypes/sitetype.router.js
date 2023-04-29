const { addSiteType, getSiteTypeById } = require("./sitetype.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./sitetype.swagger-path-details");

router.post("/sitetypes/addSiteType", addSiteType, objectPayload);
router.get("/sitetypes/getSiteTypeById", getSiteTypeById, parameterPayload);

module.exports = router;
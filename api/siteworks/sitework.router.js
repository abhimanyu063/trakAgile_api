const { addSiteWork, getSiteWorkBySiteId } = require("./sitework.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./sitework.swagger-path-details");

router.post("/siteworks/addSiteWork", addSiteWork, objectPayload);
router.get("/siteworks/getSiteWorkBySiteId/:siteId", getSiteWorkBySiteId, parameterPayload);

module.exports = router;
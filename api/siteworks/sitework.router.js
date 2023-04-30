const router = require("express").Router();
const siteWorkController = require("./sitework.controller");
const { objectPayload, parameterPayload } = require("./sitework.swagger-path-details");

router.post("/siteWorks/addSiteWork", siteWorkController.addSiteWork, objectPayload);
router.get("/siteWorks/getSiteWorkBySiteId/:siteId", siteWorkController.getSiteWorkBySiteId, parameterPayload);

module.exports = router;
const { addSiteWork, getSiteWorkById } = require("./sitework.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./sitework.swagger-path-details");

router.post("/siteworks/addSiteWork", addSiteWork, objectPayload);
router.get("/siteworks/getSiteWorkById", getSiteWorkById, parameterPayload);

module.exports = router;
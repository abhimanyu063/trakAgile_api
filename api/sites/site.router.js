const { addSite, getSiteById } = require("./site.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./site.swagger-path-details");

router.post("/sites/addSite", addSite, objectPayload);
router.get("/sites/getSiteById", getSiteById, parameterPayload);

module.exports = router;
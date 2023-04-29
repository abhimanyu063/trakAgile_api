const router = require("express").Router();
const { addSite, getSitesByUserId } = require("./site.controller");
const { objectPayload, parameterPayload } = require("./site.swagger-path-details");

router.post("/sites/addSite", addSite, objectPayload);
router.get("/sites/getSitesByUserId/:userId", getSitesByUserId, parameterPayload);

module.exports = router;
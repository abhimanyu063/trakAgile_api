const router = require("express").Router();
const siteController = require("./site.controller");
const { objectPayload, parameterPayload } = require("./site.swagger-path-details");

router.post("/sites/addSite", siteController.addSite, objectPayload);
router.get("/sites/getSitesByUserId/:userId", siteController.getSitesByUserId, parameterPayload);

module.exports = router;
const { addSiteType, getSiteTypeById } = require("./sitetype.controller");
const router = require("express").Router();
router.post("/sitetypes/addSiteType", addSiteType);
router.get("/sitetypes/getSiteTypeById", getSiteTypeById);
module.exports = router;
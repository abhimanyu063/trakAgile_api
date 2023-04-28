const { addSite, getSiteById } = require("./site.controller");
const router = require("express").Router();
router.post("/sites/addSite", addSite);
router.get("/sites/getSiteById", getSiteById);
module.exports = router;
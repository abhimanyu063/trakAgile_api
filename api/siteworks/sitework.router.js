const { addSiteWork, getSiteWorkById } = require("./sitework.controller");
const router = require("express").Router();
router.post("/siteworks/addSiteWork", addSiteWork);
router.get("/siteworks/getSiteWorkById", getSiteWorkById);
module.exports = router;
const router = require("express").Router();
const workTypeController= require("./worktype.controller");
const { objectPayload, getlist } = require("./worktype.swagger-path-details");

router.post("/workTypes/addWorkType", workTypeController.addWorkType, objectPayload);
router.get("/workTypes/getWorkTypes", workTypeController.getWorkTypes, getlist);

module.exports = router;
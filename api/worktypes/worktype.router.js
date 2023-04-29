const { addWorkType, getWorkTypes } = require("./worktype.controller");
const router = require("express").Router();
const { objectPayload, getlist } = require("./worktype.swagger-path-details");

router.post("/worktypes/addWorkType", addWorkType, objectPayload);
router.get("/worktypes/getWorkTypes", getWorkTypes, getlist);

module.exports = router;
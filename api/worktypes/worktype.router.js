const { addWorkType, getWorkTypeById } = require("./worktype.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./worktype.swagger-path-details");

router.post("/worktypes/addWorkType", addWorkType, objectPayload);
router.get("/worktypes/getWorkTypeById", getWorkTypeById, parameterPayload);

module.exports = router;
const { addWorkType, getWorkTypeById } = require("./worktype.controller");
const router = require("express").Router();
router.post("/worktypes/addWorkType", addWorkType);
router.get("/worktypes/getWorkTypeById", getWorkTypeById);
module.exports = router;
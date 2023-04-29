const router = require("express").Router();
const { addRequest, getRequestsByUserId } = require("./request.controller");
const { objectPayload, getlist } = require("./request.swagger-path-details");

router.post("/requests/addRequest", addRequest, objectPayload);
router.get("/requests/getRequestsByUserId/:userId", getRequestsByUserId, getlist);

module.exports = router;
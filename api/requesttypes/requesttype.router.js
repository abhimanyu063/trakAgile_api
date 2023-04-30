const router = require("express").Router();
const { addRequestType, getRequestTypes } = require("./requesttype.controller");
const { objectPayload, getlist } = require("./requesttype.swagger-path-details");

router.post("/requests/addRequestType", addRequestType, objectPayload);
router.get("/requests/getRequestTypes", getRequestTypes, getlist);

module.exports = router;
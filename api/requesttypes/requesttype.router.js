const router = require("express").Router();
const requestTypeController = require("./requesttype.controller");
const { objectPayload, getlist } = require("./requesttype.swagger-path-details");

router.post("/requestTypes/addRequestType", requestTypeController.addRequestType, objectPayload);
router.get("/requestTypes/getRequestTypes", requestTypeController.getRequestTypes, getlist);

module.exports = router;
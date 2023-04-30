const router = require("express").Router();
const requestController = require("./request.controller");
const { objectPayload, getlist } = require("./request.swagger-path-details");

router.post("/requests/addRequest", requestController.addRequest, objectPayload);
router.get("/requests/getRequestsByUserId/:userId", requestController.getRequestsByUserId, getlist);

module.exports = router;
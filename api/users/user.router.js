const { addUser, getUserById, validateAndGetUser } = require("./user.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload, objectValidatePayload } = require("./user.swagger-path-details");

router.post("/users/addUser", addUser, objectPayload);
router.get("/users/getUserById/:userId", getUserById, parameterPayload);
router.post("/users/validateAndGetUser", validateAndGetUser, objectValidatePayload);

module.exports = router;
const { addUser, getUserById } = require("./user.controller");
const router = require("express").Router();
const { objectPayload, parameterPayload } = require("./user.swagger-path-details");

router.post("/users/addUser", addUser,objectPayload);
router.get("/users/getUserById", getUserById,parameterPayload);

module.exports = router;
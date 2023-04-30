const router = require("express").Router();
const userController = require("./user.controller");
const { objectPayload, parameterPayload, objectValidatePayload } = require("./user.swagger-path-details");

router.post("/users/addUser", userController.addUser, objectPayload);
router.get("/users/getUserById/:userId", userController.getUserById, parameterPayload);
router.post("/users/validateAndGetUser", userController.validateAndGetUser, objectValidatePayload);

module.exports = router;
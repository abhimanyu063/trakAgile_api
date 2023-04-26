const { addUser, getUserById } = require("./user.controller");
const router = require("express").Router();

router.post("/addUser", addUser,/*
#swagger.description = 'Add user' 
#swagger.tags = ['Users']
#swagger.requestBody = {
            required: true,
            description: 'add user payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User"
                    }  
                }
            }
        } 
#swagger.responses[200] = { 
schema: { '$ref': '#/components/schemas/AddUser' },
description: 'Ok' } */);

router.get("/getUserById", getUserById,/*
#swagger.description = 'Get user by userid' 
#swagger.summary = 'get user by their id',
#swagger.tags = ['Users']
#swagger.parameters = {
        name: 'id',
        in: 'query',
        description: 'id of the user',
        required: true,
        type: 'number',
        example: 1,
} 
#swagger.responses[200] = { 
schema: { '$ref': '#/components/schemas/User' },
description: 'Ok' } */);

module.exports = router;
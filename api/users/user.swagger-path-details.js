module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add user' 
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add user payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddUser"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddUserResponse' },
            description: 'Ok' 
        }
        */
    },
    objectValidatePayload: () => {
        /*
        #swagger.description = 'Validate and get user' 
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'validate user payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ValidateUser"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetUser' },
            description: 'Ok' 
        }
        */
    },
    pathPayload: () => {
        /*
        #swagger.description = 'Get user by userId' 
        #swagger.summary = 'get user by their id',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetUser' },
            description: 'Ok' 
        }
        */
    }
}
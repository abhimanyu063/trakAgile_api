const objectPayload = () => {
    /*
    #swagger.description = 'Add user' 
    #swagger.tags = ['Users']
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
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get user by userId' 
    #swagger.summary = 'get user by their id',
    #swagger.tags = ['Users']
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetUser' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
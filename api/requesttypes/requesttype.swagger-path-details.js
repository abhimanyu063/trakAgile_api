module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add request types' 
        #swagger.tags = ['RequestTypes']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add request types payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddRequestType"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddRequestTypeResponse' },
            description: 'Ok' 
        }
        */
    },
    getList: () => {
        /*
        #swagger.description = 'Get reuest types' 
        #swagger.summary = 'get request types',
        #swagger.tags = ['RequestTypes']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetRequestTypes' },
            description: 'Ok' 
        }
        */
    }
}
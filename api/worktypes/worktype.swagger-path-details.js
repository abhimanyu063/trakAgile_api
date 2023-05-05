module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add work type' 
        #swagger.tags = ['WorkTypes']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add work type payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddWorkType"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddWorkTypeResponse' },
            description: 'Ok' 
        }
        */
    },
    getlist: () => {
        /*
        #swagger.description = 'Get work types' 
        #swagger.summary = 'get work types',
        #swagger.tags = ['WorkTypes']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetWorkTypes' },
            description: 'Ok' 
        }
        */
    }
}
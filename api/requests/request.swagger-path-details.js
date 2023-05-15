module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add request' 
        #swagger.tags = ['Requests']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add request payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddRequest"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddRequestResponse' },
            description: 'Ok' 
        }
        */
    },
    getList: () => {
        /*
        #swagger.description = 'Get reuest by userId' 
        #swagger.tags = ['Requests']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetRequests' },
            description: 'Ok' 
        }
        */
    },
    getListByDates: () => {
        /*
        #swagger.description = 'Get reuest by dates {date format : yyyy-MM-dd}' 
        #swagger.tags = ['Requests']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetRequests' },
            description: 'Ok' 
        }
        */
    }
}
module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add request' 
        #swagger.tags = ['Requests']
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
    getlist: () => {
        /*
        #swagger.description = 'Get reuest by userId' 
        #swagger.summary = 'get request by userId',
        #swagger.tags = ['Requests']
        #swagger.responses[200] = { 
        schema: { '$ref': '#/components/schemas/GetRequests' },
        description: 'Ok' 
        }
        */
    }

}
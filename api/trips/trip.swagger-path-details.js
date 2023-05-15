module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add trip' 
        #swagger.tags = ['Trips']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add trip payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddTrip"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddTripResponse' },
            description: 'Ok' 
        }
        */
    },
    getList: () => {
        /*
        #swagger.description = 'Get trip by userId' 
        #swagger.summary = 'get trip by userId',
        #swagger.tags = ['Trips']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetTrips' },
            description: 'Ok' 
        }
        */
    },
    objectUpdatePayload: () => {
        /*
        #swagger.description = 'Update trip' 
        #swagger.tags = ['Trips']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'update trip payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateTrip"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddTripResponse' },
            description: 'Ok' 
        }
        */
    }
}
const objectPayload = () => {
    /*
    #swagger.description = 'Add trip' 
    #swagger.tags = ['Trips']
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
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get trip by userId' 
    #swagger.summary = 'get trip by userId',
    #swagger.tags = ['Trips']
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetTrips' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
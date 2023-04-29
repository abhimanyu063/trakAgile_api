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
    #swagger.description = 'Get trip by tripid' 
    #swagger.summary = 'get trip by their id',
    #swagger.tags = ['Trips']
    #swagger.parameters = {
            name: 'id',
            in: 'query',
            description: 'id of the trip',
            required: true,
            type: 'number',
            example: 1,
    } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetTrip' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
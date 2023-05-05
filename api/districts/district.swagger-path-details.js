module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add district' 
        #swagger.tags = ['Districts']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add district payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddDistrict"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddDistrictResponse' },
            description: 'Ok' 
        }
        */
    },
    getlist: () => {
        /*
        #swagger.description = 'Get districts' 
        #swagger.summary = 'get districts',
        #swagger.tags = ['Districts']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetDistricts' },
            description: 'Ok' 
        }
        */
    }
};
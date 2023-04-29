const objectPayload = () => {
    /*
    #swagger.description = 'Add district' 
    #swagger.tags = ['Districts']
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
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get district by districtid' 
    #swagger.summary = 'get district by their id',
    #swagger.tags = ['Districts']
    #swagger.parameters = {
            name: 'id',
            in: 'query',
            description: 'id of the district',
            required: true,
            type: 'number',
            example: 1,
    } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetDistrict' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
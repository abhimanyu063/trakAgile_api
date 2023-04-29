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

const getlist = () => {
    /*
    #swagger.description = 'Get districts' 
    #swagger.summary = 'get districts',
    #swagger.tags = ['Districts']
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetDistricts' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, getlist };
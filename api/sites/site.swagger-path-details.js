const objectPayload = () => {
    /*
    #swagger.description = 'Add site' 
    #swagger.tags = ['Sites']
    #swagger.requestBody = {
            required: true,
            description: 'add site payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddSite"
                    }  
                }
            }
        } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/AddSiteResponse' },
    description: 'Ok' 
    }
    */
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get site by siteid' 
    #swagger.summary = 'get site by their id',
    #swagger.tags = ['Sites']
    #swagger.parameters = {
            name: 'id',
            in: 'query',
            description: 'id of the site',
            required: true,
            type: 'number',
            example: 1,
    } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetSite' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
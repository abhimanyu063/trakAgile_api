const objectPayload = () => {
    /*
    #swagger.description = 'Add site type' 
    #swagger.tags = ['SiteTypes']
    #swagger.requestBody = {
            required: true,
            description: 'add site type payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddSiteType"
                    }  
                }
            }
        } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/AddSiteTypeResponse' },
    description: 'Ok' 
    }
    */
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get site type by sitetypeid' 
    #swagger.summary = 'get site work by their id',
    #swagger.tags = ['SiteTypes']
    #swagger.parameters = {
            name: 'id',
            in: 'query',
            description: 'id of the site type',
            required: true,
            type: 'number',
            example: 1,
    } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetSiteType' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
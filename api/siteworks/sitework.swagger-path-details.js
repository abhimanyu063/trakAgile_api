const objectPayload = () => {
    /*
    #swagger.description = 'Add site work' 
    #swagger.tags = ['SiteWorks']
    #swagger.requestBody = {
            required: true,
            description: 'add site work payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddSiteWork"
                    }  
                }
            }
        } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/AddSiteWorkResponse' },
    description: 'Ok' 
    }
    */
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get site work by siteworkid' 
    #swagger.summary = 'get site work by their id',
    #swagger.tags = ['SiteWorks']
    #swagger.parameters = {
            name: 'id',
            in: 'query',
            description: 'id of the site work',
            required: true,
            type: 'number',
            example: 1,
    } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetSiteWork' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
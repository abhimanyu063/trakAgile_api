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

const getlist = () => {
    /*
    #swagger.description = 'Get site types' 
    #swagger.summary = 'get site types',
    #swagger.tags = ['SiteTypes']
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetSiteTypes' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, getlist };
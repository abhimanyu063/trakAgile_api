module.exports = {
    objectPayload: () => {
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
    },
    parameterPayload: () => {
        /*
        #swagger.description = 'Get site work by siteId' 
        #swagger.summary = 'get site work by siteId',
        #swagger.tags = ['SiteWorks']
        #swagger.responses[200] = { 
        schema: { '$ref': '#/components/schemas/GetSiteWorks' },
        description: 'Ok' 
        }
        */
    }
}
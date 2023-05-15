module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add site' 
        #swagger.tags = ['Sites']
        #swagger.security: [{
            basicAuth: [],
        }],
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
    },
    getList: () => {
        /*
        #swagger.description = 'Get site by userId' 
        #swagger.tags = ['Sites']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetSites' },
            description: 'Ok' 
        }
        */
    },
    getListByDates: () => {
        /*
        #swagger.description = 'Get site by dates {date format : yyyy-MM-dd}' 
        #swagger.tags = ['Sites']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetSites' },
            description: 'Ok' 
        }
        */
    }
}
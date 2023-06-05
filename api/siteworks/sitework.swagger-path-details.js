module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add site work' 
        #swagger.tags = ['SiteWorks']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add site work payload',
            content: {
                "multipart/form-data": {
                    schema: {
                        type: 'object',
                        'properties':{
                            'siteId':{
                                'type': 'number',
                                'example': 1
                            },
                            'workTypeId':{
                                'type': 'number',
                                'example': 1
                            },
                            'docPath':{
                                'type': 'string',
                                'format': 'binary'
                            },
                            'documentDescription':{
                                'type': 'string',
                                'example': 'doc description'
                            }
                        }
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddResponse' },
            description: 'Ok' 
        }
        */
    },
    reportIssuePayload: () => {
        /*
        #swagger.description = 'Report site issue' 
        #swagger.tags = ['SiteWorks']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add report site issue payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ReportIssue"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/AddResponse' },
            description: 'Ok' 
        }
        */
    },
    getList: () => {
        /*
        #swagger.description = 'Get site work by siteId' 
        #swagger.summary = 'get site work by siteId',
        #swagger.tags = ['SiteWorks']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetSiteWorks' },
            description: 'Ok' 
        }
        */
    }
}
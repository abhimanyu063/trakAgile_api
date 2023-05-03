module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add site work' 
        #swagger.tags = ['SiteWorks']
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
                            'isSiteReportedIssue':{
                                'type': 'number',
                                'example': 1
                            },
                            'isWorkCompleted':{
                                'type': 'number',
                                'example': 1
                            }
                        }
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
    pathPayload: () => {
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
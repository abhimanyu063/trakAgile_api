const objectPayload = () => {
    /*
    #swagger.description = 'Add work type' 
    #swagger.tags = ['WorkTypes']
    #swagger.requestBody = {
            required: true,
            description: 'add work type payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddWorkType"
                    }  
                }
            }
        } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/AddWorkTypeResponse' },
    description: 'Ok' 
    }
    */
};

const parameterPayload = () => {
    /*
    #swagger.description = 'Get work type by worktypeid' 
    #swagger.summary = 'get work type by their id',
    #swagger.tags = ['WorkTypes']
    #swagger.parameters = {
            name: 'id',
            in: 'query',
            description: 'id of the work type',
            required: true,
            type: 'number',
            example: 1,
    } 
    #swagger.responses[200] = { 
    schema: { '$ref': '#/components/schemas/GetWorkType' },
    description: 'Ok' 
    }
    */
};

module.exports = { objectPayload, parameterPayload };
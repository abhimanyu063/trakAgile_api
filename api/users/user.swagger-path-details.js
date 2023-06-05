module.exports = {
    objectPayload: () => {
        /*
        #swagger.description = 'Add user' 
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'add user payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/AddUser"
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
    objectValidatePayload: () => {
        /*
        #swagger.description = 'Validate and get user' 
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'validate user payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ValidateUser"
                    }  
                }
            }
        } 
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetUser' },
            description: 'Ok' 
        }
        */
    },
    pathPayload: () => {
        /*
        #swagger.description = 'Get user by userId' 
        #swagger.summary = 'get user by their id',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetUser' },
            description: 'Ok' 
        }
        */
    },
    objectChangePassPayload: () => {
        /*
        #swagger.description = 'Change user password' 
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'change user password payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ChangePassword"
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
        #swagger.description = 'Get user list' 
        #swagger.summary = 'get user list with details',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetUsers' },
            description: 'Ok' 
        }
        */
    },
    getOnlineUsers: () => {
        /*
        #swagger.description = 'Get online users' 
        #swagger.summary = 'get online users',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetOnlineUsers' },
            description: 'Ok' 
        }
        */
    },
    forgetPassPathPayload: () => {
        /*
        #swagger.description = 'User forget password' 
        #swagger.summary = 'User forget password',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/ForgetPassword' },
            description: 'Ok' 
        }
        */
    },
    validateUserNameEmailAndMobilePayload: () => {
        /*
        #swagger.description = 'Validate username, email and mobile in user registration to avoid duplicacy' 
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.requestBody = {
            required: true,
            description: 'Validate user name email and mobile payload',
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ValidateUserNameEmailAndMobile"
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
    getSupervisorList: () => {
        /*
        #swagger.description = 'Get supervisor list' 
        #swagger.summary = 'get supervisor list',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetSupervisors' },
            description: 'Ok' 
        }
        */
    },
    getUserHierarchy: () => {
        /*
        #swagger.description = 'Get user hierarchy' 
        #swagger.summary = 'get user hierarchy',
        #swagger.tags = ['Users']
        #swagger.security: [{
            basicAuth: [],
        }],
        #swagger.responses[200] = { 
            schema: { '$ref': '#/components/schemas/GetUserHierarchy' },
            description: 'Ok' 
        }
        */
    },
}
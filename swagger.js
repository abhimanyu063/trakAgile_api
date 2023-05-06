const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const tags = require('./swagger/tags');
const schemas = require('./swagger/schemas');

const doc = {
    info: {
        version: "1.0.0",
        title: "trakAgile",
        description: "trak Agile description."
    },
    servers: [
        {
            url: "http://localhost:3000/api/",
            description: "local server"
        },
        {
            url: "http://45.90.109.227:3000/api/",
            description: "dev server"
        }
    ],
    components: {
        securitySchemes: {
            basicAuth: {
                type: 'http',
                scheme: 'basic'
            },
        },
        schemas: schemas
    },
    security: {
        basicAuth: []
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = require('./api/endpoint.routerpath');

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')           // Your project's root file
})
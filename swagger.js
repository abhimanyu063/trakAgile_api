const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const tags = require('./swagger/tags');
const schemas = require('./swagger/schemas');

const doc = {
    info: {
        version: "1.0.0",
        title: "trakAgile",
        description: "trak Agile description."
    },
    host: "localhost:3000",
    basePath: "/",
    servers: [
        {
            url: "http://localhost:3000/api/",
            description: "dev server"
        },
        {
            url: "https://localhost:3000/api/",
            description: "prod server"
        }
    ],
    consumes: ['application/json', 'multipart/form-data'],
    produces: ['application/json'],
    tags: tags,
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    components: {
        schemas: schemas
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = require('./api/endpoint.routerpath');

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')           // Your project's root file
})
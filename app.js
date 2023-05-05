const express = require('express');
const app = express();
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const basicAuth = require('./helper/basic-auth');
const router = require('./api/endpoint.router');
const errorHandler = require('./helper/error-handler');

app.use(cors({
    origin: '*',
    methods: 'GET, POST',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true
}));

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(basicAuth);
router.forEach((path) => {
    app.use('/api', path);
});
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server is up and running");
});
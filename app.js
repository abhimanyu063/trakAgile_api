const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const router = require('./api/endpoint.router');

const cors = require("cors");

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log("Server is up and running");
})

router.forEach((path) => {
    app.use("/api", path);
});
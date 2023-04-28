const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const router = require('./api/endpoints');

const cors = require("cors");

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log("Server is up and running");
})

app.use("/api", router.districts);
app.use("/api", router.sites);
app.use("/api", router.sitetypes);
app.use("/api", router.siteworks);
app.use("/api", router.trips);
app.use("/api", router.users);
app.use("/api", router.worktypes);

//https://github.com/davibaltar/example-swagger-autogen/blob/master/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({

    origin: "*"

}));

app.use(express.json());
const userRouter = require('./api/users/user.router');
//const customerRouter = require('./api/customers/customer.router');
//const salonRouter = require('./api/salons/salon.router');
//const serviceType = require('./api/servicetype/servicetype.router');
//const orderRouter = require('./api/orders/order.router');
//const slotRouter = require('./api/slots/slot.router');

app.use("/api/users", userRouter);
//app.use("/api/customers", customerRouter);
//app.use("/api/salons", salonRouter);
//app.use("/api/servicetype", serviceType);
//app.use("/api/orders", orderRouter);
//app.use("/api/slots", slotRouter);

app.listen(3000, () => {

    console.log("Server is up and running");

})
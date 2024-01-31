require("dotenv").config();
const bodyParser = require('body-parser');
const errorMiddleware = require("./error-middleware/error-middleware");
const cors = require("cors");

// Add this middleware before your routes

const express = require("express");
const app = express();

const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const userdashboardRouter = require("./router/userDashboard-router");

const connectDb = require("./utils/db");

app.use(cors());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use(bodyParser.json());

app.use("/", authRouter);
app.use("/", contactRoute);
app.use("/", userdashboardRouter);

app.use(errorMiddleware);
const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
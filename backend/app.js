const express = require("express");
const cookieParser = require("cookie-parser");
const { errorMiddleware, notFound } = require("./middlewares/errorMiddleware");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes Imports
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);

// ErrorMiddleware
app.use(notFound);
app.use(errorMiddleware);

module.exports = app;

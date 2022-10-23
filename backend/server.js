const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// Uncaught Rejections
process.on("uncaughtException", (error) => {
  console.log(`Shutting down the server due to uncaught error`);
  console.log(`Error: ${error.message}`);
  process.exit(1);
});

// Configure Dotenv
dotenv.config({ path: "./backend/config/config.env" });
// Connect Database
connectDB();

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

// Unhandled Promise Rejections
process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});

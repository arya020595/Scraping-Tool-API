const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const { connectToDB } = require("./models/db");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");

// Connect to MongoDB
connectToDB();

// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Body parser middleware
app.use(bodyParser.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Healthy" });
});

// API routes with namespace
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

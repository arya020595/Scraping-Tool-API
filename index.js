const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./models/db");
const scrapeRoutes = require("./routes/scrapeRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", scrapeRoutes);
app.use("/", (req, res) => {
  res.json({ data: "Healthy" });
});

connectToDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

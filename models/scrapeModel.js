const mongoose = require("mongoose");

// MongoDB schema definition
const scrapeSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    url: String,
  },
  { timestamps: true }
);

// MongoDB model creation
const Scrape = mongoose.model("Scrape", scrapeSchema);

module.exports = Scrape;

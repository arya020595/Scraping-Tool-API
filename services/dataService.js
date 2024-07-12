const { Scrape } = require("../models/scrapeModel");

const saveToMongoDB = async (data) => {
  try {
    await Scrape.insertMany(data);
    console.log("Scraped data saved to MongoDB");
  } catch (err) {
    console.error("Error saving to MongoDB:", err);
  }
};

module.exports = {
  saveToMongoDB,
};

const { scrapeData } = require("../services/scraperService");
const { saveToMongoDB } = require("../services/dataService");
const Scrape = require("../models/scrapeModel");

const getScrapedData = async (req, res) => {
  try {
    const {
      websiteURL,
      specificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector,
    } = req.body;

    const scrapedData = await scrapeData(
      websiteURL,
      specificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector
    );

    res.json({ data: scrapedData });
  } catch (error) {
    console.error("Error scraping data:", error.message);
    res.status(500).json({ error: "Failed to scrape data" });
  }
};

const postScrapedData = async (req, res) => {
  try {
    const {
      websiteURL,
      specificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector,
    } = req.body;

    const scrapedData = await scrapeData(
      websiteURL,
      specificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector
    );

    await saveToMongoDB(scrapedData);

    res.json({ message: "Scraped data saved successfully", data: scrapedData });
  } catch (error) {
    console.error("Error scraping data:", error.message);
    res.status(500).json({ error: "Failed to scrape and save data" });
  }
};

const getAllData = async (req, res) => {
  try {
    const data = await Scrape.find();
    res.json({ data });
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error.message);
    res.status(500).json({ error: "Failed to fetch data from MongoDB" });
  }
};

module.exports = {
  getScrapedData,
  postScrapedData,
  getAllData,
};

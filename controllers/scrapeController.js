const { scrapeData } = require("../services/scraperService");
const { saveToMongoDB } = require("../services/dataService");
const Scrape = require("../models/scrapeModel");

const getScrapedData = async (req, res) => {
  try {
    const {
      websiteURL,
      spesificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector,
    } = req.body;

    if (
      !websiteURL ||
      !spesificSelector ||
      !titleSelector ||
      !descriptionSelector ||
      !imgSelector ||
      !linkSelector
    ) {
      return res
        .status(400)
        .json({ error: "Missing required body parameters" });
    }

    const scrapedData = await scrapeData(
      websiteURL,
      spesificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector
    );
    if (!scrapedData || scrapedData.length === 0) {
      return res
        .status(500)
        .json({ error: "No data scraped or error occurred during scraping" });
    }

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
      spesificSelector,
      titleSelector,
      descriptionSelector,
      imgSelector,
      linkSelector,
    } = req.body;
    const jsonFileName = "scrapedData.json";

    if (
      !websiteURL ||
      !spesificSelector ||
      !titleSelector ||
      !descriptionSelector ||
      !imgSelector ||
      !linkSelector
    ) {
      return res
        .status(400)
        .json({ error: "Missing required body parameters" });
    }

    const scrapedData = await scrapeData(
      websiteURL,
      spesificSelector,
      titleSelector,
      descriptionSelector,
      linkSelector
    );
    if (!scrapedData || scrapedData.length === 0) {
      return res
        .status(500)
        .json({ error: "No data scraped or error occurred during scraping" });
    }

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

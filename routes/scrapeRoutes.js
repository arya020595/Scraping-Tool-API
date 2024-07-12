const express = require("express");
const {
  getScrapedData,
  postScrapedData,
  getAllData,
} = require("../controllers/scrapeController");

const router = express.Router();

router.get("/scrape", getScrapedData);
router.post("/scrape", postScrapedData);
router.get("/data", getAllData);

module.exports = router;

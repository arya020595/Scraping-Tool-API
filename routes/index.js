const express = require("express");
const scrapeRoutes = require("./scrapeRoutes");

const router = express.Router();

router.use("/scrape", scrapeRoutes);

module.exports = router;

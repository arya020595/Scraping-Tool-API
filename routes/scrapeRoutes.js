const express = require("express");
const validate = require("../middlewares/yupMiddleware");
const scrapeValidationSchema = require("../validators/scrapeValidationSchema");
const {
  getScrapedData,
  postScrapedData,
  getAllData,
} = require("../controllers/scrapeController");

const router = express.Router();

router.post("/", validate(scrapeValidationSchema), getScrapedData);
router.post("/save", validate(scrapeValidationSchema), postScrapedData);
router.get("/data", getAllData);

module.exports = router;

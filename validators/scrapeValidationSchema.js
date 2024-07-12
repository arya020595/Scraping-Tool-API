const { object, string } = require("yup");

const scrapeValidationSchema = object().shape({
  websiteURL: string().url().required("Website URL is required"),
  specificSelector: string().required("Specific selector is required"),
  titleSelector: string().required("Title selector is required"),
  descriptionSelector: string().required("Description selector is required"),
  imgSelector: string().required("Image selector is required"),
  linkSelector: string().required("Link selector is required"),
});

module.exports = scrapeValidationSchema;

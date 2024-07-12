const axios = require("axios");
const { JSDOM } = require("jsdom");

async function fetchHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching the page:", error.message);
    return null;
  }
}

async function scrapeData(
  url,
  selector,
  titleSelector,
  descriptionSelector,
  imgSelector,
  linkSelector
) {
  const html = await fetchHTML(url);
  if (!html) {
    console.error("Failed to fetch HTML");
    return null;
  }

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const elements = document.querySelectorAll(selector);

  const scrapedData = [];

  elements.forEach((element) => {
    const title = element.querySelector(titleSelector)?.textContent.trim();
    const description = element
      .querySelector(descriptionSelector)
      ?.textContent.trim();
    const link = element.querySelector(linkSelector)?.getAttribute("href");

    const imgElement = element.querySelector(imgSelector);
    const image = imgElement
      ? imgElement.getAttribute("data-src") || imgElement.getAttribute("src")
      : null;

    if (title && description && link && image) {
      scrapedData.push({ title, description, link, image });
    }
  });

  return scrapedData;
}

module.exports = {
  scrapeData,
};

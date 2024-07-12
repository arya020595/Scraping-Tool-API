const fs = require("fs");

const saveToJSON = (data, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Scraped data saved to ${fileName}`);
};

module.exports = {
  saveToJSON,
};

# Scraping Tool API

## Description
The Scraping Tool API is a robust and scalable solution designed to scrape data from websites using specified CSS selectors. This API enables users to define their own selectors and retrieve structured data, making it ideal for use cases such as data mining, market research, and competitive analysis.

## Features
- **Dynamic Scraping**: Specify CSS selectors for the title, description, image, and link to extract precise data from web pages.
- **Validation**: Ensures that all required fields are provided and validated using Yup.
- **Swagger Documentation**: Easily explore and test the API endpoints with Swagger UI.
- **MongoDB Integration**: Save scraped data to MongoDB for persistent storage and future reference.
- **Health Check Endpoint**: Quickly verify the API status with a built-in health check endpoint.
- **Environment Configuration**: Manage environment-specific settings using dotenv.

## Installation
1. **Clone the repository:**
```
git clone https://github.com/arya020595/scraper_tool_api
cd scraper_tool_api
```
2. **Install dependencies:**
```
npm install
```
3. **Set up environment variables:**
Create a **`.env`** file in the root directory with the following content:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```
5. **Run the application:**
```
npm start
```

## Swagger Documentation
Access the Swagger UI for detailed API documentation and testing:
```
http://localhost:3000/api-docs
```

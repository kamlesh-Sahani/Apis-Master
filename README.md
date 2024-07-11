
# ApisMaster

This project provides a collection of API endpoints categorized into various sections like weather, products, random users, jokes, books, stock, quotes, and YouTube. Each category contains multiple API endpoints along with sample data and descriptions to help you understand the API's functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Categories](#api-categories)
  - [Weather](#weather)
  - [Product](#product)
  - [Random Users](#random-users)
  - [Random Products](#random-products)
  - [Random Jokes](#random-jokes)
  - [Books](#books)
  - [Stock](#stock)
  - [Quotes](#quotes)
  - [YouTube](#youtube)
 


![apiMaster](https://github.com/kamlesh-Sahani/TestApi-Full-Stack-App-/assets/126887367/f39ea575-3bd5-4980-8ee3-f1ef8bfe070f)

## Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/kamlesh-Sahani/TestApi-Full-Stack-App-.git
cd api-catalog
```

Install the dependencies:

```sh
npm install
```

## Usage

You can start exploring the APIs by importing the `codeAndDes` array from the `codeAndDes.ts` file. This array contains all the API categories along with their endpoints, descriptions, and sample data.

Example usage in a TypeScript file:

```typescript
import { codeAndDes } from './codeAndDes';

codeAndDes.forEach(category => {
  console.log(`Category: ${category.title}`);
  category.apis.forEach(api => {
    console.log(`API: ${api.api}`);
    console.log(`Description: ${api.des}`);
    console.log(`Sample Code: ${api.code}`);
  });
});
```

## API Categories

### Weather

#### Retrieve comprehensive weather data for all available locations

- **API:** `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=India`
- **Description:** Retrieve comprehensive weather data for all available locations. This API provides detailed information including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility. Perfect for applications that need a complete overview of weather across multiple regions.

#### Get specific weather data for a particular city

- **API:** `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=london`
- **Description:** Get specific weather data for a particular city. This endpoint delivers detailed weather information such as temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility for the specified city. Ideal for apps focused on urban weather forecasting.

### Product

#### Retrieve a comprehensive list of all available products

- **API:** `http://localhost:3000/api/product/all`
- **Description:** Retrieve a comprehensive list of all available products in the catalog. This API provides detailed information on each product, including title, description, price, reviews, category, stock availability, review ratings, and images. Ideal for applications that require a full overview of the product inventory.

#### Get detailed information about a specific product by its ID

- **API:** `http://localhost:3000/api/product/one?id={productId}`
- **Description:** Get detailed information about a specific product by its ID. This endpoint delivers comprehensive details such as the product's title, description, price, reviews, category, stock availability, review ratings, and images. Useful for applications focused on individual product pages or detailed product information.

### Random Users

#### Retrieve a random list of users

- **API:** `https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10`
- **Description:** The API endpoint retrieves a random list of users. When accessing this endpoint, you will receive a response containing a randomly generated list of users. This functionality is useful for scenarios such as testing, demo data generation, or populating user interfaces with dummy data. It provides a convenient way to obtain randomized user information for various purposes within your application.

#### Retrieve a user based on the specified ID

- **API:** `https://api.freeapi.app/api/v1/public/randomusers/{userId}`
- **Description:** The API endpoint retrieves a user based on the specified ID. When accessing this endpoint and providing a valid user ID as a parameter, you will receive a response containing the details of the user matching the provided ID.

#### Retrieve a single random user

- **API:** `https://api.freeapi.app/api/v1/public/randomusers/user/random`
- **Description:** The API endpoint retrieves a single random user. When accessing this endpoint, you will receive a response containing the details of one randomly selected user.

### Random Products

#### Retrieve a list of dummy products

- **API:** `https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches`
- **Description:** The API endpoint returns a list of dummy products. When accessing this endpoint, you will receive a response containing a collection of dummy product information.

#### Retrieve a product based on the specified product ID

- **API:** `https://api.freeapi.app/api/v1/public/randomproducts/{product_id}`
- **Description:** The API endpoint allows you to retrieve a product based on the specified product ID. When accessing this endpoint and providing a valid product ID as a parameter, you will receive a response containing the details of the product matching the provided ID.

#### Retrieve a randomly generated dummy product

- **API:** `https://api.freeapi.app/api/v1/public/randomproducts/product/random`
- **Description:** The API endpoint allows you to retrieve a randomly generated dummy product. When accessing this endpoint, you will receive a response containing the details of a randomly generated product.

### Random Jokes

#### Retrieve a list of jokes

- **API:** `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1`
- **Description:** The API endpoint retrieves a list of jokes. When accessing this endpoint, you will receive a response containing a collection of jokes. This functionality is useful for retrieving multiple jokes at once, enabling you to incorporate humor and amusement into your application or provide entertainment to users.

#### Retrieve a joke based on the specified joke ID

- **API:** `https://api.freeapi.app/api/v1/public/randomjokes/{joke_id}`
- **Description:** The API endpoint allows you to retrieve a joke based on the specified joke ID. When accessing this endpoint and providing a valid joke ID as a parameter, you will receive a response containing the joke associated with the provided ID.

#### Retrieve a random joke

- **API:** `https://api.freeapi.app/api/v1/public/randomjokes/joke/random`
- **Description:** The API endpoint returns a random joke from a list of jokes. When accessing this endpoint, you will receive a response containing a randomly selected joke.

### Books

#### Retrieve a list of random books

- **API:** `https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech`
- **Description:** The API endpoint allows you to retrieve a list of random books. Upon accessing this endpoint, you will receive a response containing a collection of randomly selected books.

#### Retrieve a book based on the book ID

- **API:** `https://api.freeapi.app/api/v1/public/books/{books_id}`
- **Description:** The API endpoint retrieves a book based on the book ID provided as a path variable. By accessing this endpoint and specifying a valid book ID, you will receive a response containing the details of the corresponding book.

#### Retrieve a random book

- **API:** `https://api.freeapi.app/api/v1/public/books/book/random`
- **Description:** The API endpoint returns a single random book from a list of books. Upon accessing this endpoint, you will receive a response containing the details of a randomly selected book.

### Stock

#### Retrieve a list of stocks listed on NSE

- **API:** `https://api.freeapi.app/api/v1/public/stocks?page=1&limit=2&inc=Symbol%2CName%2CMarketCap%2CCurrentPrice&query=tata`
- **Description:** The API endpoint allows you to retrieve a list of stocks listed on NSE (National Stock Exchange of India). The data you get is a snapshot taken on 28th Dec 2023 and not live from the stock exchange. Upon accessing this endpoint, you will receive a response containing a collection of randomly selected stocks.

#### Retrieve a stock based on the Symbol as ID

- **API:** `https://api.freeapi.app/api/v1/public/stocks/INFY`
- **Description:** The API endpoint retrieves a stock based on the Symbol as ID provided as a path variable. By accessing this endpoint and specifying a valid stock symbol, you will receive a response containing the details of the corresponding stock.

#### Retrieve a single random stock

- **API:** `https://api.freeapi.app/api/v1/public/stocks/stock/random`
- **Description:** The API endpoint returns a single random stock from a list of stocks. Upon accessing this endpoint, you will receive a response containing the details of a randomly selected stock.

### Quotes

#### Retrieve a list of quotes

- **API:** `https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human`
- **Description:** The API endpoint allows you to retrieve a list of quotes. When accessing this endpoint, you will receive a response

 containing a collection of quotes. This functionality is useful for retrieving multiple quotes at once, enabling you to incorporate motivational or inspirational quotes into your application.

#### Retrieve a quote based on the specified quote ID

- **API:** `https://api.freeapi.app/api/v1/public/quotes/{quote_id}`
- **Description:** The API endpoint allows you to retrieve a quote based on the specified quote ID. When accessing this endpoint and providing a valid quote ID as a parameter, you will receive a response containing the quote associated with the provided ID.

#### Retrieve a random quote

- **API:** `https://api.freeapi.app/api/v1/public/quotes/quote/random`
- **Description:** The API endpoint returns a random quote from a list of quotes. When accessing this endpoint, you will receive a response containing a randomly selected quote.

### YouTube

#### Retrieve a list of random videos

- **API:** `https://api.freeapi.app/api/v1/public/youtube?page=1&limit=10&inc=id%2Ckind%2Cetag%2Cstatistics%2CcontentDetails%2Csnippet&query=tech`
- **Description:** The API endpoint allows you to retrieve a list of random videos. Upon accessing this endpoint, you will receive a response containing a collection of randomly selected videos.

#### Retrieve a video based on the video ID

- **API:** `https://api.freeapi.app/api/v1/public/youtube/{youtube_id}`
- **Description:** The API endpoint retrieves a video based on the video ID provided as a path variable. By accessing this endpoint and specifying a valid video ID, you will receive a response containing the details of the corresponding video.

#### Retrieve a single random video

- **API:** `https://api.freeapi.app/api/v1/public/youtube/video/random`
- **Description:** The API endpoint returns a single random video from a list of videos. Upon accessing this endpoint, you will receive a response containing the details of a randomly selected video.



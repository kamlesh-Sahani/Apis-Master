import { dataCodes } from "./dataCode";
interface ApiType {
  code: string;
  des: string;
  api: string;
}
export interface CodeAndDesType {
  title: string;
  apis: ApiType[];
}
export const codeAndDes: CodeAndDesType[] = [
  {
    title: "Weather",
    apis: [
      {
        api: "http://api.weatherapi.com/v1/current.json?key=a8d59a49f7d54862ac2182625242806&q=India",
        code: dataCodes.weatherApi,
        des: `Retrieve comprehensive weather data for all available locations. This API provides detailed information including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility. Suitable for applications requiring extensive weather insights across multiple regions.`,
      },
      {
        api: "http://api.weatherapi.com/v1/current.json?key=a8d59a49f7d54862ac2182625242806&q=london",
        code: dataCodes.cityWeather,
        des: `Access specific weather data for London. This endpoint delivers detailed weather information such as temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility. Ideal for applications focused on urban weather forecasting in London.`,
      },
    ],
  },
  {
    title: "Product",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches",
        code: `{
          "_id": "667a9cf8c0badc51c4d68ad8",
          "title": "Wireless Bluetooth Headphones",
          "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
          "price": 99.99,
          "reviews": [
            {
              "review": "Great sound quality and very comfortable to wear.",
              "_id": "667a9cf8c0badc51c4d68ad9"
            },
            {
              "review": "Battery lasts long, but the noise cancellation could be better.",
              "_id": "667a9cf8c0badc51c4d68ada"
            }
          ],
          "category": "Electronics",
          "stock": 50,
          "reviewStar": 4.5,
          "image": "https://example.com/images/wireless-bluetooth-headphones.jpg",
          "createdAt": "2024-06-25T10:33:28.710Z",
          "updatedAt": "2024-06-25T10:33:28.710Z",
          "__v": 0
        }`,
        des: `Retrieve a comprehensive list of all available products in the catalog. This API provides detailed information on each product, including title, description, price, reviews, category, stock availability, review ratings, and images. Ideal for applications that require a complete overview of the product inventory.`,
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/{product_id}",
        code: `{
          "_id": "667a9cf8c0badc51c4d68ad8",
          "title": "Wireless Bluetooth Headphones",
          "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
          "price": 99.99,
          "reviews": [
            {
              "review": "Great sound quality and very comfortable to wear.",
              "_id": "667a9cf8c0badc51c4d68ad9"
            },
            {
              "review": "Battery lasts long, but the noise cancellation could be better.",
              "_id": "667a9cf8c0badc51c4d68ada"
            }
          ],
          "category": "Electronics",
          "stock": 50,
          "reviewStar": 4.5,
          "image": "https://example.com/images/wireless-bluetooth-headphones.jpg",
          "createdAt": "2024-06-25T10:33:28.710Z",
          "updatedAt": "2024-06-25T10:33:28.710Z",
          "__v": 0
        }`,
        des: `Get detailed information about a specific product using its ID. This endpoint provides comprehensive details such as the product's title, description, price, reviews, category, stock availability, review ratings, and images. Useful for applications focused on individual product pages or obtaining specific product information.`,
      },
    ],
  },
  {
    title: "Randomusers",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        code: dataCodes.randomUserCode,
        des: "Retrieve a random list of users with this API endpoint. You'll receive a response containing a randomly generated list of users, useful for scenarios such as testing, demo data generation, or populating user interfaces with dummy data.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers/{userId}",
        code: dataCodes.randomUserCode,
        des: "Get details of a user based on the specified ID. Provide a valid user ID as a parameter to receive detailed information about the user matching the ID.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers/user/random",
        code: dataCodes.randomUserCode,
        des: "Retrieve details of a single random user using this API endpoint. You'll receive a response containing the details of one randomly selected user.",
      },
    ],
  }
  ,
  {
    title: "Randomproducts",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches",
        code: `
          {
            "category": "mens-watches",
            "price": 120,
            "thumbnail": "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
            "images": [
              "https://cdn.dummyjson.com/product-images/61/1.jpg",
              "https://cdn.dummyjson.com/product-images/61/2.png",
              "https://cdn.dummyjson.com/product-images/61/3.jpg"
            ],
            "title": "Leather Straps Wristwatch",
            "id": 61
          },
          {
            "category": "mens-watches",
            "price": 46,
            "thumbnail": "https://cdn.dummyjson.com/product-images/62/thumbnail.jpg",
            "images": [
              "https://cdn.dummyjson.com/product-images/62/1.jpg",
              "https://cdn.dummyjson.com/product-images/62/2.jpg"
            ],
            "title": "Waterproof Leather Brand Watch",
            "id": 62
          },
          {
            "category": "mens-watches",
            "price": 50,
            "thumbnail": "https://cdn.dummyjson.com/product-images/63/thumbnail.webp",
            "images": [
              "https://cdn.dummyjson.com/product-images/63/1.jpg",
              "https://cdn.dummyjson.com/product-images/63/2.jpg",
              "https://cdn.dummyjson.com/product-images/63/3.png",
              "https://cdn.dummyjson.com/product-images/63/4.jpeg"
            ],
            "title": "Royal Blue Premium Watch",
            "id": 63
          }
        `,
        des: "Retrieve a collection of dummy products focused on men's watches. This API endpoint provides details such as category, price, thumbnails, images, title, and ID for each product in the list.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/{product_id}",
        des: "Get details of a specific product using its ID with this API endpoint. Provide a valid product ID as a parameter to receive comprehensive information about the product matching the provided ID.",
        code: dataCodes.randomProductCode,
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/product/random",
        des: "Retrieve details of a randomly generated dummy product using this API endpoint. You'll receive a response containing detailed information about a product randomly selected from the database.",
        code: dataCodes.randomProductCode,
      },
    ],
  }
  ,

  {
    title: "Randomjokes",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1",
        des: "Retrieve a collection of jokes related to science with this API endpoint. You'll receive a response containing multiple jokes, making it easy to incorporate humor and entertainment into your application.",
        code: dataCodes.randomeJokesCode,
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomjokes/{joke_id}",
        des: "Get a specific joke by its ID using this API endpoint. Provide a valid joke ID as a parameter to receive the joke associated with that ID.",
        code: dataCodes.randomeJokesCode,
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
        des: "Retrieve a randomly selected joke from the joke list with this API endpoint. You'll receive a response containing a joke chosen randomly.",
        code: dataCodes.randomeJokesCode,
      },
    ],
  }
  ,{
    title: "Books",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech",
        des: "Retrieve a collection of randomly selected books related to technology using this API endpoint. You'll receive details about each book, including its kind, ID, etag, and volume information.",
        code: dataCodes.booksCode
      },
      {
        api: "https://api.freeapi.app/api/v1/public/books/{books_id}",
        des: "Get detailed information about a specific book by its ID with this API endpoint. Provide a valid book ID as a path variable to receive comprehensive details of the corresponding book.",
        code: dataCodes.booksCode
      },
      {
        api: "https://api.freeapi.app/api/v1/public/books/book/random",
        des: "Retrieve details of a randomly selected book from the list using this API endpoint. You'll receive information about a book chosen randomly.",
        code: dataCodes.booksCode
      },
    ],
  }
  ,{
    title: "Stock",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/stocks?page=1&limit=2&inc=Symbol%2CName%2CMarketCap%2CCurrentPrice&query=tata",
        code: dataCodes.stockCode,
        des: "Retrieve a collection of stocks listed on the National Stock Exchange of India (NSE) with a snapshot taken on December 28, 2023. This endpoint provides details such as stock symbols, names, market capitalization, and current prices of randomly selected stocks."
      },
      {
        api: "https://api.freeapi.app/api/v1/public/stocks/INFY",
        code: `
  {
    "Name": "Tata Chemicals Limited",
    "Symbol": "TATACHEM",
    "ListingDate": "01-Apr-99",
    "ISIN": "INE092A01019",
    "MarketCap": "₹ 28,355 Cr.",
    "CurrentPrice": "₹ 1,113",
    "HighLow": "₹ 1,123 / 912",
    "StockPE": 14.4,
    "BookValue": "₹ 840",
    "DividendYield": "1.54 %",
    "ROCE": "11.6 %",
    "ROE": "12.0 %",
    "FaceValue": "₹ 10.0"
  }`,
        des: "Retrieve detailed information about a specific stock by its symbol (ID) using this API endpoint. Provide a valid stock symbol as a path variable to receive comprehensive details about the corresponding stock, including its name, listing date, ISIN, market capitalization, current price, trading range, financial metrics, and face value."
      },
      {
        api: "https://api.freeapi.app/api/v1/public/stocks/stock/random",
        code: `
  {
    "Name": "Tata Chemicals Limited",
    "Symbol": "TATACHEM",
    "ListingDate": "01-Apr-99",
    "ISIN": "INE092A01019",
    "MarketCap": "₹ 28,355 Cr.",
    "CurrentPrice": "₹ 1,113",
    "HighLow": "₹ 1,123 / 912",
    "StockPE": 14.4,
    "BookValue": "₹ 840",
    "DividendYield": "1.54 %",
    "ROCE": "11.6 %",
    "ROE": "12.0 %",
    "FaceValue": "₹ 10.0"
  }`,
        des: "Retrieve details of a randomly selected stock from the list using this API endpoint. Upon accessing this endpoint, you will receive information about a randomly chosen stock, including its name, symbol, listing date, ISIN, market capitalization, current price, trading range, financial metrics, and face value."
      },
    ]
  }
  ,
  {
    title: "Quotes",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human",
        des: "Retrieve a collection of quotes using this API endpoint. When accessing this endpoint, you will receive a response containing a curated collection of quotes, making it suitable for various applications requiring inspirational or motivational content.",
        code: dataCodes.quotesCode
      },
      {
        api: "https://api.freeapi.app/api/v1/public/quotes/{quotes_id}",
        des: "Retrieve a specific quote by its ID using this API endpoint. Provide a valid quote ID as a path variable to receive the exact quote you are looking for. This endpoint is useful for applications needing precise quote retrieval based on user preferences or requirements.",
        code: dataCodes.quotesCode
      },
      {
        api: "https://api.freeapi.app/api/v1/public/quotes/quote/random",
        des: "Retrieve a randomly selected quote from a collection using this API endpoint. Each time you access this endpoint, you will receive a different quote, making it suitable for applications that require variety or randomness in quote selection.",
        code: dataCodes.quotesCode
      },
    ]
  }
  ,{
    title: "Youtube",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/youtube/channel",
        des: "Retrieve comprehensive details about a specific YouTube channel using this Channel Details API. Utilizing a static JSON file, this API provides essential information, statistics, and metadata related to the channel. It simplifies the development of YouTube-like channel pages, allowing developers to focus on UI design without the complexities of real-time API integration. Note: Data provided by this API is static and not real-time.",
        code: dataCodes.youtubeChannelCode
      },
      {
        api: "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=mostLiked",
        des: "Access a collection of YouTube videos via this API endpoint. It retrieves videos from a JSON structure similar to YouTube's official API. You can specify parameters such as page, limit, query, and sorting criteria (most liked, most viewed, latest, oldest) to customize your video list. Note: Data provided by this API is static and not real-time.",
        code: dataCodes.youtubeVideoCode
      }
    ]
  }
  ,
  {
    title: "Ecommerce",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/ecommerce/profile",
        des: "Retrieve the e-commerce profile of the logged-in user using this API endpoint. Upon accessing it, you will receive a response containing basic details such as the user's name, email address, phone number, and other relevant information associated with their e-commerce profile.",
        code: dataCodes.ecommerceProfileCode
      },
      {
        api: "https://api.freeapi.app/api/v1/ecommerce/products?page=1&limit=10",
        des: "Access all available products in an e-commerce application through this API endpoint. When invoked, it fetches and returns the complete list of products offered by the platform. The response includes details like product name, description, price, stock availability, and other relevant information. This API facilitates browsing and purchasing decisions within the e-commerce platform.",
        code: dataCodes.ecommerceProduct
      },
      {
        api: "https://api.freeapi.app/api/v1/ecommerce/products/{product_id}",
        des: "Retrieve detailed information about a specific product using its unique productId with this API endpoint. By providing the productId as a path variable in the URL, the API fetches and returns attributes such as product name, price, description, stock availability, images, and other relevant details associated with the product.",
        code: dataCodes.ecommerceProduct
      }
    ]
  }
  ,
  {
    title:"socialMedia",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/social-media/profile",
        code:dataCodes.socialMediaProfile,
        des:"The API endpoint allows a logged-in user to fetch their social media profile.When the user is authenticated and authorized, accessing this endpoint will return the user's social media profile information, such as their username, bio, avatar, cover image, and other relevant details."
      },
      {
        api:"https://api.freeapi.app/api/v1/social-media/profile/u/rosanna_krajcik51",
        code:dataCodes.socialMediaUsers,
        des:"The API endpoint allows users to fetch another user's social media profile based on the username provided as a path variable.By accessing this endpoint and providing the username as a parameter, you will receive a response containing the social media profile information of the specified user."
      }
    ]
  },
  {
    title:"SocialMediaPosts",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/social-media/posts?page=1&limit=10",
        code:dataCodes.socailMediaPosts,
        des:"The API endpoint allows users to fetch all posts posted by themselves or other users within the social media application.By accessing this endpoint, users can retrieve a collection of posts containing relevant information."
      },
      {
        api:"https://api.freeapi.app/api/v1/social-media/posts/6495426ed02af5a73904db67",
        code:dataCodes.postsById,
        des:"The API endpoint allows users to fetch a post by providing the post ID as a path variable.By accessing this endpoint and providing a valid post ID, users will receive a response containing the details of the post corresponding to the provided ID."
      },
      {
        api:"https://api.freeapi.app/api/v1/social-media/posts/get/u/santos82?page=1&limit=3",
        code:dataCodes.postsByUsername,
        des:"The API endpoint allows users to fetch posts of other users by passing the username as a path variable.When accessing this endpoint and providing a valid username as a parameter, you will receive a response containing the posts associated with the specified username."
      },
      {
        api:"https://api.freeapi.app/api/v1/social-media/posts/get/t/dolore?page=1&limit=3",
        code:dataCodes.postsByTag,
        des:"The API endpoint allows users to retrieve posts by passing a tag name as a path variable.When accessing this endpoint and providing a valid tag name as part of the URL, the API will return a response containing posts that are associated with the specified tag."
      }
    ]
  },
  {
    title:"chatApp",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/chat-app/chats",
        code:dataCodes.chatApp,
        des:"Retrieve all chats associated with the logged-in user.This endpoint provides a comprehensive list of both individual and group chats, offering a centralized view of the user's communication interactions.Developers can utilize this endpoint to seamlessly gather chat metadata, facilitating efficient tracking and management of conversations within the application."
      },
      {
        api:"https://api.freeapi.app/api/v1/chat-app/chats/users",
        code:dataCodes.chatAppUsers,
        des:"This API endpoint enables developers to retrieve a list of users who are available for chat interactions.The endpoint facilitates the identification of potential chat partners or group members for the logged-in user.It provides a seamless way to explore and initiate conversations, fostering a dynamic and engaging chat environment within the application."
      }
    ]
  },
  {
    title:"groupChat",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/chat-app/chats/group/64ca9e166cabe93cce077e0a",
        code:dataCodes.groupChat,
        des:"This API endpoint allows developers to retrieve comprehensive information about a specific group chat.This includes essential details such as the group's name, the total number of participants, and a detailed list of member profiles, providing a holistic overview of the group's composition.By utilizing this endpoint, developers can seamlessly access and display key insights into group interactions."
      }
    ]
  },
  {
    title:"ToDoList",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/todos?query=reactjs&complete=false",
        code:dataCodes.toDoList,
        des:"The API endpoint allows you to retrieve all the added todos.When accessing this endpoint, you will receive a response containing a list of all the todos that have been added."
      },

      {
        api:"https://api.freeapi.app/api/v1/todos/648e0741aeefd0cfa40adddd",
        code:dataCodes.toDoById,
        des:"The API endpoint retrieves a specific todo item based on the todo ID provided as a path variable in the URL.When accessing this endpoint and specifying a valid todo ID in the URL, you will receive a response containing the details of the corresponding todo item."
      }
    ]
  },
  {
    title: "Weather2",
    apis: [
      {
        api: "https://api.weatherapi.com/v1/current.json?key=a8d3f35fec004fc6bdf160839231906&q={city_name}&aqi=no",
        des: "Retrieve current weather information for a specified city using this API endpoint. Replace `{city_name}` in the URL with the name of the city you're interested in. The response includes details such as temperature, humidity, wind speed, and weather condition.",
        code: dataCodes.weather2Code
      }
    ]
  }
  ,
  {
    title: 'SpaceX-launches',
    apis: [
      {
        api: "https://api.spacexdata.com/v4/launches/upcoming",
        des: "Retrieve a list of upcoming SpaceX launches.",
        code: dataCodes.spacexUpcomingCode
      },
      {
        api: "https://api.spacexdata.com/v4/launches/latest",
        des: "Retrieve details of the latest SpaceX launch.",
        code: dataCodes.spacexLatestCode
      },
      {
        api: "https://api.spacexdata.com/v4/launches/past",
        des: "Retrieve a list of past SpaceX launches.",
        code: dataCodes.spacexUpcomingCode
      },
      {
        api: "https://api.spacexdata.com/v4/launches",
        des: "Retrieve details of all SpaceX launches.",
        code: dataCodes.spacexUpcomingCode
      },
      {
        api: "https://api.spacexdata.com/v4/launches/{id}",
        des: "Retrieve details of a specific SpaceX launch identified by its ID.",
        code: dataCodes.spacexLatestCode
      }
    ]
  }
  
  ,
  {
    title: "SpaceX-rocket",
    apis: [
      {
        api: "https://api.spacexdata.com/v4/rockets",
        des: "Retrieves details of all SpaceX rockets",
        code: dataCodes.spacexRocketCode
      },
      {
        api: "https://api.spacexdata.com/v4/rockets/{id}",
        des: "Retrieves details of a specific SpaceX rocket by its ID.",
        code: dataCodes.spacexRocketCode
      }
    ]
  }
  ,{
    title:"SpaceX-capsules",
    apis:[
      {
        api:"https://api.spacexdata.com/v4/capsules",
        des:"Retrieves details of all SpaceX capsules.",
        code:dataCodes.spacexCapsuleCode
      },
      {
        api:"https://api.spacexdata.com/v4/capsules/{id}",
        des:"Retrieves details of a specific SpaceX capsule by its ID.",
        code:dataCodes.spacexCapsuleCode
      }
    ]
  },{
    title:"SpaceX-starlink",
    apis:[
      {
        api:"https://api.spacexdata.com/v4/starlink",
        des:"Retrieves details of all SpaceX Starlink satellites",
        code:dataCodes.spacexStarlinkCode
      }
    ]
  },{
    "title": "Coingecko",
    "apis": [
      {
        "api": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd",
        "code": dataCodes.coinGeckoSimplePrice,
        "des": "Get the current price of Bitcoin and Ethereum in USD."
      },
      {
        "api": "https://api.coingecko.com/api/v3/coins/list",
        "code": dataCodes.coinGeckoSimplePrice,
        "des": "List all supported coins id, name, and symbol."
      },
      {
        "api": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
        "code": dataCodes.coinGeckoMarkets,
        "des": "List the top 10 cryptocurrencies by market cap in USD."
      },
      {
        "api": "https://api.coingecko.com/api/v3/coins/{id}",
        "code": dataCodes.coinGeckoMarkets,
        "des": "Get current data (name, price, market, ...) for a coin by its id."
      },
      {
        "api": "https://api.coingecko.com/api/v3/exchanges",
        "code": dataCodes.coinGeckoExchanges,
        "des": "List all exchanges."
      },
      {
        "api": "https://api.coingecko.com/api/v3/exchanges/{id}",
        "code": dataCodes.coinGeckoExchanges,
        "des": "Get exchange volume in BTC and tickers for a specific exchange by its id."
      },
      {
        "api": "https://api.coingecko.com/api/v3/global",
        "code": dataCodes.coinGeckoGlobal,
        "des": "Get cryptocurrency global data."
      }
    ]
  },{
    "title": "Ip-Geolocation",
    "apis": [
      {
        "api": "https://ipapi.co/json/",
        "code": dataCodes.ipGeolocationCurrent,
        "des": "Get geolocation information for the current IP address."
      },
      {
        "api": "https://ipapi.co/{ip}/json/",
        "code": dataCodes.ipGeolocationCurrent,
        "des": "Get geolocation information for a specific IP address."
      },
      {
        "api": "https://ipapi.co/{ip}/country/",
        "code": dataCodes.ipGeolocationCountry,
        "des": "Get the country for a specific IP address."
      },
      {
        "api": "https://ipapi.co/{ip}/city/",
        "code": dataCodes.ipGeolocationCity,
        "des": "Get the city for a specific IP address."
      },
      {
        "api": "https://ipapi.co/{ip}/timezone/",
        "code": dataCodes.ipGeolocationTimezone,
        "des": "Get the timezone for a specific IP address."
      },
      {
        "api": "https://ipapi.co/{ip}/currency/",
        "code": dataCodes.ipGeolocationCurrency,
        "des": "Get the currency for a specific IP address."
      }
    ]
  },{
    "title": "Open-Trivia-Database",
    "apis": [
      {
        "api": "https://opentdb.com/api.php?amount=10",
        "code": dataCodes.triviaRandom,
        "des": "Fetches 10 random trivia questions."
      },
      {
        "api": "https://opentdb.com/api_category.php",
        "code": dataCodes.triviaCategories,
        "des": "Fetches a list of trivia categories."
      }
    ]
  },{
    "title": "Numbers",
    "apis": [
      {
        "api": "http://numbersapi.com/random/trivia",
        "code": dataCodes.numberTrivia,
        "des": "Fetches a random trivia fact about a number."
      },
      {
        "api": "http://numbersapi.com/random/year",
        "code": dataCodes.numberYear,
        "des": "Fetches a random fact about a year."
      }
    ]
  },
  {
    "title": "Nasa",
    "apis": [
      {
        "api": "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
        "code": dataCodes.nasaApod,
        "des": "DEMO_KEY Rate Limits ---> In documentation examples, the special DEMO_KEY api key is used. This API key can be used for initially exploring APIs prior to signing up, but it has much lower rate limits, so you’re encouraged to signup for your own API key if you plan to use the API (signup is quick and easy). The rate limits for the DEMO_KEY are:   ----> Hourly Limit: 30 requests per IP address per hour  Daily Limit: 50 requests per IP address per day: ---->  1.Fetches the Astronomy Picture of the Day."
      },
      {
        "api": "https://api.nasa.gov/neo/rest/v1/feed?start_date={start_date}&end_date={end_date}&api_key=DEMO_KEY",
        "code": dataCodes.nasaNeoFeed,
        "des": "Fetches Near Earth Object data for a specified date range."
      },
      {
        "api": "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol={sol}&camera={camera}&api_key=DEMO_KEY",
        "code": dataCodes.nasaMarsRoverPhotos,
        "des": "Fetches photos taken by Mars rovers on a specific sol (Martian day) and camera."
      },
      {
        "api": "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0",
        "code": dataCodes.nasaMarsWeather,
        "des": "Fetches the latest weather data from Mars."
      },
      {
        "api": "https://api.nasa.gov/planetary/earth/imagery?lon={longitude}&lat={latitude}&date={date}&api_key=DEMO_KEY",
        "code": dataCodes.nasaEarthImagery,
        "des": "Fetches satellite imagery for a specific location and date."
      },
      {
        "api": "https://api.nasa.gov/planetary/earth/assets?lon={longitude}&lat={latitude}&begin={begin}&end={end}&api_key=DEMO_KEY",
        "code": dataCodes.nasaEarthAssets,
        "des": "Fetches available assets for a specific location and date range."
      },
      {
        "api": "https://api.nasa.gov/DONKI/CME?startDate={start_date}&endDate={end_date}&api_key=DEMO_KEY",
        "code": dataCodes.nasaCme,
        "des": "Fetches Coronal Mass Ejections (CMEs) data."
      },
      {
        "api": "https://api.nasa.gov/DONKI/FLR?startDate={start_date}&endDate={end_date}&api_key=DEMO_KEY",
        "code": dataCodes.nasaSolarFlares,
        "des": "Fetches Solar Flare data."
      },
      {
        "api": "https://api.nasa.gov/DONKI/SEP?startDate={start_date}&endDate={end_date}&api_key=DEMO_KEY",
        "code": dataCodes.nasaSolarEnergeticParticle,
        "des": "Fetches Solar Energetic Particle (SEP) data."
      },
      {
        "api": "https://api.nasa.gov/DONKI/GST?startDate={start_date}&endDate={end_date}&api_key=DEMO_KEY",
        "code": dataCodes.nasaGeomagneticStorm,
        "des": "Fetches Geomagnetic Storm data."
      }
    ]
  }
  
  
  
  
  

];

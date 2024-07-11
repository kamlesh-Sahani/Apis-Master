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
    title: "weather",
    apis: [
      {
        api: "http://api.weatherapi.com/v1/current.json?key=a8d59a49f7d54862ac2182625242806&q=India",

        code:dataCodes.weatherApi,
        des: `Retrieve comprehensive weather data for all available locations. This API provides detailed information including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility. Perfect for applications that need a complete overview of weather across multiple regions.`,
      },
      {
        api: "http://api.weatherapi.com/v1/current.json?key=a8d59a49f7d54862ac2182625242806&q=london",
        code:dataCodes.cityWeather,
        des: `Get specific weather data for a particular city. This endpoint delivers detailed weather information such as temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility for the specified city. Ideal for apps focused on urban weather forecasting.`,
      },
    ],
  },
  {
    title: "product",
    apis: [
      {
        api: "http://localhost:3000/api/product/all",
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
      }
        `,
        des: `Retrieve a comprehensive list of all available products in the catalog. This API provides detailed information on each product, including title, description, price, reviews, category, stock availability, review ratings, and images. Ideal for applications that require a full overview of the product inventory.`,
      },
      {
        api: "http://localhost:3000/api/product/one?id={productId}",
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
  }
    `,
        des: `Get detailed information about a specific product by its ID. This endpoint delivers comprehensive details such as the product's title, description, price, reviews, category, stock availability, review ratings, and images. Useful for applications focused on individual product pages or detailed product information.`,
      },
    ],
  },
  {
    title: "randomusers",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        code: dataCodes.randomUserCode,
        des: "The API endpoint retrieves a random list of users. When accessing this endpoint, you will receive a response containing a randomly generated list of users.This functionality is useful for scenarios such as testing, demo data generation, or populating user interfaces with dummy data.It provides a convenient way to obtain randomized user information for various purposes within your application.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers/{userId}",
        code: dataCodes.randomUserCode,
        des: "The API endpoint retrieves a user based on the specified ID.When accessing this endpoint and providing a valid user ID as a parameter, you will receive a response containing the details of the user matching the provided ID.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers/user/random",
        code: dataCodes.randomUserCode,
        des: "The API endpoint retrieves a single random user. When accessing this endpoint, you will receive a response containing the details of one randomly selected user.",
      },
    ],
  },
  {
    title: "randomproducts",
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
        }`,
        des: "The API endpoint returns a list of dummy products.When accessing this endpoint, you will receive a response containing a collection of dummy product information.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/{product_id}",
        des: "The API endpoint allows you to retrieve a product based on the specified product ID.When accessing this endpoint and providing a valid product ID as a parameter, you will receive a response containing the details of the product matching the provided ID.",
        code:dataCodes.randomProductCode,
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/product/random",
        des: "The API endpoint allows you to retrieve a randomly generated dummy product.when accessing this endpoint, you will receive a response containing the details of a randomly generated product.",
        code:dataCodes.randomProductCode,
      },
    ],
  },

  {
    title:"randomjokes",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1",
        des:"The API endpoint retrieves a list of jokes.When accessing this endpoint, you will receive a response containing a collection of jokes.This functionality is useful for retrieving multiple jokes at once, enabling you to incorporate humor and amusement into your application or provide entertainment to users.",
        code:dataCodes.randomeJokesCode,
      },
      {
        des:"The API endpoint allows you to retrieve a joke based on the specified joke ID.When accessing this endpoint and providing a valid joke ID as a parameter, you will receive a response containing the joke associated with the provided ID.",
        api:"https://api.freeapi.app/api/v1/public/randomjokes/{joke_id}",
        code:dataCodes.randomeJokesCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
        des:"The API endpoint returns a random joke from a list of jokes.When accessing this endpoint, you will receive a response containing a randomly selected joke",
        code:dataCodes.randomeJokesCode
      },
      
    ]
  },{
    title:"books",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech",
        des:"The API endpoint allows you to retrieve a list of random books.Upon accessing this endpoint, you will receive a response containing a collection of randomly selected books.",
        code:dataCodes.booksCode
      },{
        api:"https://api.freeapi.app/api/v1/public/books/{books_id}",
        des:"The API endpoint retrieves a book based on the book ID provided as a path variable.By accessing this endpoint and specifying a valid book ID, you will receive a response containing the details of the corresponding book.",
        code:dataCodes.booksCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/books/book/random",
        des:"The API endpoint returns a single random book from a list of books.Upon accessing this endpoint, you will receive a response containing the details of a randomly selected book",
        code:dataCodes.booksCode
      },
  
    ]
  },{
    title:"stock",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/stocks?page=1&limit=2&inc=Symbol%2CName%2CMarketCap%2CCurrentPrice&query=tata",
        code:dataCodes.stockCode,
        des:"The API endpoint allows you to retrieve a list of stocks listed on NSE [National Stock Exchange of India]. The data you get is a snapshot taken on 28th Dec 2023 & not live from stock exchange. Upon accessing this endpoint, you will receive a response containing a collection of randomly selected stocks"
      },
      {
        api:"https://api.freeapi.app/api/v1/public/stocks/INFY",
        code:`
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
  },`,
        des:"The API endpoint retrieves a stock based on the Symbol as ID provided as a path variable.By accessing this endpoint and specifying a valid stock symbol, you will receive a response containing the details of the corresponding stock."
      },
      {
        api:"https://api.freeapi.app/api/v1/public/stocks/stock/random",
        code:`
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
  },`,
        des:"The API endpoint returns a single random stock from a list of stocks.upon accessing this endpoint, you will receive a response containing the details of a randomly selected stock."
      },
    ]
  },
  {
    title:"quotes",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human",
        des:"The API endpoint allows you to retrieve a list of quotes.When accessing this endpoint, you will receive a response containing a collection of quotes.",
        code:dataCodes.quotesCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/quotes/{quotes_id}",
        des:"The API endpoint enables you to retrieve a specific quote based on the quote ID provided in the path variable.When accessing this endpoint and providing a valid quote ID, you will receive a response containing the quote corresponding to that ID.",
        code:dataCodes.quotesCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/quotes/quote/random",
        des:"The API endpoint returns a random quote from a list of quotes.When accessing this endpoint, you will receive a response containing a randomly selected quote.",
        code:dataCodes.quotesCode
      },
    ]
  },{
    title:"youtube",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/youtube/channel",
        des:"This Channel Details API is your gateway to access comprehensive information about a specific YouTube channel.By leveraging a static JSON file, you can effortlessly retrieve and explore vital details, statistics, and metadata associated with the channel to build stunning YouTube like channel page UI.--->Disclaimer:Data provided by the API is static and not real-timeThis simplifies the process of developing a YouTube clone, allowing developers to solely focus on UI design and creativity, without worrying about complex API key configuration.",
        code:dataCodes.youtubeChannelCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest",
        des:"This API endpoint enables you to retrieve all YouTube videos from a JSON file with a structure similar to YouTube's public API.Upon accessing this endpoint, you will receive a response containing a list of YouTube videos, just like you would from YouTube's official API.--->Disclaimer:Data provided by the API is static and not real-time.This simplifies the process of developing a YouTube clone, allowing developers to solely focus on UI design and creativity, without worrying about complex API key configuration.",
        code:dataCodes.youtubeVideoCode
      },

    ]
  },
  {
    title:"ecommerce",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/ecommerce/profile",
        code:dataCodes.ecommerceProfileCode,
        des:"The API endpoint allows you to retrieve the e-commerce profile of the logged-in user.When accessing this endpoint, you will receive a response containing the basic details of the user's e-commerce profile.This includes information such as the user's name, email address, phone number, and other relevant details."
      },
      {
        api:"https://api.freeapi.app/api/v1/ecommerce/products?page=1&limit=10",
        code:dataCodes.ecommerceProduct,
        des:"The API returns all the products available in an e-commerce application.When invoked, this API fetches and retrieves the complete list of products offered by the e-commerce platform.The response typically includes details such as the product name, description, price, stock, and other relevant information.This API allows users or other systems to access and display the entire catalog of products, facilitating browsing and purchasing decisions within the e-commerce application."
      },
      {
        api:"https://api.freeapi.app/api/v1/ecommerce/products/{product_id}",
        code:dataCodes.ecommerceProduct,
        des:"The API retrieves a product based on the provided productId passed as a path variable.This API serves as a means to fetch specific product information from the backend based on a unique identifier.By passing the productId in the URL, the API searches and retrieves the corresponding product details, including attributes such as name, price, description, stock, images and any other relevant information associated with the product."
      },
    ]
  },
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
    title:"toDoList",
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
    title:"weather2",
    apis:[
      {
        api:"https://api.weatherapi.com/v1/current.json?key=a8d3f35fec004fc6bdf160839231906&q={city_name}&aqi=no",
        code:dataCodes.weather2Code,
        des:"This API endpoint retrieves the current weather information for a specified city. You need to replace `{city_name}` with the actual name of the city you want to get the weather information for. The response will include details such as temperature, humidity, wind speed, and weather condition."
      }
   
    ]
  },
  {
title:'spacex-lounches',
apis:[
  {
    api:"https://api.spacexdata.com/v4/launches/upcoming",
    code:dataCodes.spacexUpcomingCode,
    des:" Retrieves a list of upcoming SpaceX launches."
  },
  {
    api:"https://api.spacexdata.com/v4/launches/latest",
    code:dataCodes.spacexLatestCode,
    des:" Retrieves details of the latest SpaceX launch."
  },
  {
    api:"https://api.spacexdata.com/v4/launches/past",
    code:dataCodes.spacexUpcomingCode,
    des:" Retrieves a list of past SpaceX launches.."
  },
  {
    api:"https://api.spacexdata.com/v4/launches",
    code:dataCodes.spacexUpcomingCode,
    des:"Retrieves details of all SpaceX launches."
  },

  {
    api:"https://api.spacexdata.com/v4/launches/{id}",
    code:dataCodes.spacexLatestCode,
    des:"Retrieves details of all SpaceX launches."
  }
]
  },
  {
    title:"spacex-rocket",
    apis:[
      {
        api:"https://api.spacexdata.com/v4/rockets",
        des:"Retrieves details of all SpaceX rockets",
        code:dataCodes.spacexRocketCode
      },
      {
        api:"https://api.spacexdata.com/v4/rockets/{id}",
        des:"Retrieves details of a specific SpaceX rocket by its ID.",
        code:dataCodes.spacexRocketCode
      }

    ]
  },{
    title:"spacex-capsules",
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
    title:"spacex-starlink",
    apis:[
      {
        api:"https://api.spacexdata.com/v4/starlink",
        des:"Retrieves details of all SpaceX Starlink satellites",
        code:dataCodes.spacexStarlinkCode
      }
    ]
  },{
    "title": "coingecko",
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
    "title": "ip-geolocation",
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
    "title": "open-trivia-database",
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
    "title": "numbers",
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
    "title": "nasa",
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

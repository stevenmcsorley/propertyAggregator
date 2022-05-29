const PORT = process.env.PORT || 4000;
import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import circularJSON from "circular-json";
import { load } from "cheerio";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());
// CONFIGS
app.disable("view cache");

axios.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

const zooplaUrl = "https://www.zoopla.co.uk/for-sale/"

// DATA

let listingsInfo = [];
let html,
title,
description,
priceType,
price,
image

const exchanges = [
  {
    // name: "coinmarketcap",
    // address: "https://coinmarketcap.com/",
    // endpoint: [
    //   {
    //     id: "map",
    //     url: "/v1/cryptocurrency/map",
    //   },
    //   {
    //     id: "home",
    //     url: "",
    //   },
    //   {
    //     id: "latest_listings",
    //     url: "/v1/cryptocurrency/listings/latest",
    //   },
    //   {
    //     id: "gainers",
    //     url: "gainers-losers/",
    //   },
    //   {
    //     id: "new",
    //     url: "new/",
    //   },
    //   {
    //     id: "most_viewed",
    //     url: "most-viewed-pages/",
    //   },
    //   {
    //     id: "trending",
    //     url: "trending-cryptocurrencies/",
    //   },
    // ],
    name: 'zoopla',
    address: zooplaUrl,
    endpoint: [
      {
        id: 'property',
        url: '/?beds_min=2&page_size=25&price_max=230000&property_sub_type=semi_detached&property_sub_type=flats&property_sub_type=detached&property_sub_type=terraced&property_sub_type=bungalow&view_type=list&results_sort=newest_listings&search_source=refine"'
      },
      {
        id: 'details',
        url: 'details'
      }
    ]
  },
];

// SCRAPERS

async function getProperties(res, page_type) {
  listingsInfo = [];
  html = await res.data;
  let $ = load(html);
  let x = $("script[type='application/json']#__NEXT_DATA__", html).text()
  let test = JSON.parse(x)
    
      if(page_type === 'property'){
      listingsInfo = test.props.pageProps.initialProps.searchResults.listings.regular
      } else if (page_type === 'details'){
      listingsInfo = [test.props.pageProps]
      } else {
      console.log("No ticker found");
    }
}

// API METHODS
async function getCryptoInfo(cherrioFunction, endpoint, page_type) {
  try {
    const response = await axios.get(`${endpoint}`);
    await cherrioFunction(response, page_type);
  } catch (error) {
    console.log(error);
  }
}

// HANDLERS

async function exchangeSwap(req, res) {
  let source;
  let pageTypeId, exchangeId;
  pageTypeId = req.params.pageTypeId
  exchangeId = req.params.exchangeId;
  const searchId = req.params.searchId;


  if(pageTypeId !== 'property'){
    console.log('pageTypeId', pageTypeId)
    pageTypeId = exchangeId
    exchangeId = 'zoopla'
  }


  let pageTerms = exchanges
    .filter((a) => a.name == exchangeId)
    .map((a) => {
      return { 
        baseUrl: a.address,
        pageType: a.endpoint.filter( end => end.id === pageTypeId).map((z) => { return z.url}),
        searchTerm: searchId
       }
    });

    if(pageTypeId === 'property'){
      source = `${pageTerms[0].baseUrl}${pageTypeId}/${pageTerms[0].searchTerm}${pageTerms[0].pageType}`

    } else if(pageTypeId === 'details'){
      source = `${pageTerms[0].baseUrl}${pageTypeId}/${pageTerms[0].searchTerm}`
    }
  
  console.log("city", source)

  await getCryptoInfo(getProperties, source, pageTypeId);
  res.send(listingsInfo);
}



// ROUTES

app.get("/", (req, res) => {
  res.json("Crypto prices API");
});

app.get("/crypto/:exchangeId/:endpointId", exchangeSwap);
//         details     zoopla     id
//          for-sale    details     id
app.get("/:pageTypeId/:exchangeId/:searchId", exchangeSwap);
// app.get("/property/:exchangeId/:endpointId", exchangeSwap);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
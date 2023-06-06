import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "DEMIWALL Wood Dining Chair",
    price: 3000,
    image: "https://m.media-amazon.com/images/I/71e9HWZgYDL._AC_UL400_.jpg",
    categoryName: "dining chairs",
    inStock: false,
    rating:4.3
  },
  {
    _id: uuid(),
    title: "REEN Wood Dining Chair",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/71uoG6-gcNL._AC_UL400_.jpg",
    categoryName: "dining chairs",
    inStock: true,
    rating:4.0
  },
  {
    _id: uuid(),
    title: "BAGARI ARTS Dining Chairs",
    price: 3000,
    image: "https://m.media-amazon.com/images/I/71wFlxZmL3L._AC_UL400_.jpg",
    categoryName: "dining chairs",
    inStock: false,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "Diksha Wood Marin Dining Chair",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/61fwId90HUL._AC_UL400_.jpg",
    categoryName: "dining chairs",
    inStock: true,
    rating:2.5
  },
  {
    _id: uuid(),
    title: "Generic Lounge Chair",
    price: 8000,
    image: "https://m.media-amazon.com/images/I/513KyY4GRKL._AC_UL400_.jpg",
    categoryName: "lounge chairs",
    inStock: true,
    rating:2.5
  },
  {
    _id: uuid(),
    title: "Amazon Lounge Portable Chair",
    price: 8000,
    image: "https://m.media-amazon.com/images/I/8186oMNJA4L._AC_UL400_.jpg",
    categoryName: "lounge chairs",
    inStock: true,
    rating:3
  },
  {
    _id: uuid(),
    title: "Wakefit Office Chair",
    price: 6800,
    image: "https://m.media-amazon.com/images/I/719zelylHPL._AC_UL400_.jpg",
    categoryName: "office chairs",
    inStock: false,
    rating:4.5
  },
  {
    _id: uuid(),
    title: "SAVYA HOME® APEX Chair",
    price: 5800,
    image: "https://m.media-amazon.com/images/I/81yJVI6Za5L._AC_UL400_.jpg",
    categoryName: "office chairs",
    inStock: true,
    rating:3.8
  },
  {
    _id: uuid(),
    title: "woodnesia Sheesham Rocking Chair",
    price: 12800,
    image: "https://m.media-amazon.com/images/I/519k+6Wmj2L._AC_UL400_.jpg",
    categoryName: "rocking chairs",
    inStock: true,
    rating:3.6
  },
  {
    _id: uuid(),
    title: "Bamboo Wooden Rocking Chair",
    price: 8800,
    image: "https://m.media-amazon.com/images/I/71bXojr71ML._AC_UL400_.jpg",
    categoryName: "rocking chairs",
    inStock: false,
    rating:3.5
  },
  {
    _id: uuid(),
    title: "Custom Porch Rocker",
    price: 5829,
    image: "https://m.media-amazon.com/images/I/61e3XjYsyiL._AC_UL400_.jpg",
    categoryName: "rocking chairs",
    inStock: true,
    rating:4.5
  },
]

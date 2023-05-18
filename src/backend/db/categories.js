import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "dining-chairs",
    description:
      "A chair designed to be used during mealtimes, at a dining table.",
  },
  {
    _id: uuid(),
    categoryName: "lounge-chairs",
    description:
      "A long chair with a back that can be straight for sitting on or flat for lying on.",
  },
  {
    _id: uuid(),
    categoryName: "office-chairs",
    description: "A chair that is designed for use at a desk in an office.",
  },
  {
    _id: uuid(),
    categoryName: "rocking-chairs",
    description:
      "A chair with two curved bands (also known as rockers) attached to the bottom of the legs, connecting the legs on each side to each other.",
  },
]

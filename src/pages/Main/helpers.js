import { SORT_TYPE } from "../../utils/constants";

export function sortProducts(filteredProducts, sortValue) {
  switch (sortValue) {
    case SORT_TYPE.CHEAP_TO_EXP:
      return filteredProducts?.sort((a, b) => a.price - b.price);

    case SORT_TYPE.EXP_TO_CHEAP:
      return filteredProducts?.sort((a, b) => b.price - a.price);

    case SORT_TYPE.RATING:
      return filteredProducts?.sort((a, b) => b.rating.rate - a.rating.rate);

    default:
      return filteredProducts;
  }
}

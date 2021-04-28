import { ADD_SHOP_DATA } from "./constants";

export const addNewProductData = (item) => ({
  type: ADD_SHOP_DATA,
  payload: {new :{item}},
});

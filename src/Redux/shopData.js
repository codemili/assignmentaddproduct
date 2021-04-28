import { ADD_SHOP_DATA } from "./constants";

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SHOP_DATA:
      console.log(action.payload.new);
      return [...state,action.payload.new];
      
    default:
      return state;
  }
};

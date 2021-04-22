import { ITEMS } from "../../data/dummy-data";
import {} from "../actions/shop";

const initialState = {
  items: ITEMS
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
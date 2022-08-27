import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducer/cartReducer";
import { checkoutReducer } from "./reducer/checkoutReducer";
import { customerReducer } from "./reducer/customerReducer";

const reducer = combineReducers({
  cartReducer,
  checkoutReducer,
  customerReducer,
});

const store = createStore(reducer);

export default store;

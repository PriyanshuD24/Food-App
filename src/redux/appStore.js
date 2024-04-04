import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeChangerReducer from "./themeSlice";

const appStore = configureStore({
  reducer: {
    // this reducer contains all the slices of main redux store
    cart: cartReducer, // cart(nameof slice) : cartReducer (name of slice +"Reducer")
    themeChanger: themeChangerReducer,
  },
}); // initially it empty

export default appStore;


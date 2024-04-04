import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //takes configratution
  name: "cart",
  initialState: {
    items: [], // contains items in cart
    totalSum: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      
    },
    removeItem: (state, action) => {
      const element = action.payload;
      const idx = current(state).items.indexOf(element);
      console.log(element, idx ,state);
      state.items.splice(idx, 1);
    },
    clearCart: (state, action) => {
      // state.items=[];
      state.items.length = 0;
      console.log(current(state));
      state.totalSum = 0;
      //return { items: [] , totalSum :0}; // returns the new state with items=[] & totalSum=0
    },
    getTotal: (state, action) => {
      let Sum = 0;
      state.items.map((res) => {
        const { price, defaultPrice } = res?.card?.info;
        Sum += price || defaultPrice;
      });
      state.totalSum = Sum / 100;
    },
  },
});

/*
basically this createSlice return an object with 2 keys ie
reducer (contains all the reducers)
and actions (contains all actions) 

cartSlice = {
    actions : {
        addItem : ,
        removeItem : ,
        clearCart : ,
    },
    reducers :
}
*/

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart, getTotal } = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      const pizza = action.payload;

      const existingPizza = state.find(
        (item) =>
          item.name === pizza.name &&
          item.size === pizza.size
      );

      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        state.push({
          ...pizza,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
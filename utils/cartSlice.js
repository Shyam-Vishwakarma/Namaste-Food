import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].qty += 1;
      } else {
        state.items[id] = { item: action.payload, qty: 1 };
      }
    },
    updateItemQty: (state, action) => {
      const { id, num } = action.payload;
      if (state.items[id].qty + num == 0) {
        delete state.items[id];
      } else state.items[id].qty += num;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      delete state.items[id];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});
export const { addItem, removeItem, clearCart, updateItemQty } =
  cartSlice.actions;
export default cartSlice.reducer;

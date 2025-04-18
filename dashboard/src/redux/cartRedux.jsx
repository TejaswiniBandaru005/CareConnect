// src/redux/cartRedux.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial cart state
const initialState = {
  cartItems: []
};

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

// Export actions
export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeItem,
  clearCart
} = cartSlice.actions;

// Store setup
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

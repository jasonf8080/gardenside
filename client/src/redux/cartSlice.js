// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storedCart = JSON.parse(localStorage.getItem('cart'))

const initialState = {
  isCartOpen: false,
  cartItems: storedCart || [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state, action) => {
        state.isCartOpen = true
    },

    closeCart: (state, action) => {
        state.isCartOpen = false
    },

    addItem: (state, action) => {
        const {_id, name, quantity, price} = action.payload;
        const item = state.cartItems.find(item => item._id === _id);

        if(item){
            item.quantity = item.quantity + 1
        } else {
            state.cartItems = [...state.cartItems, {_id, name, quantity, price}]
        }
       
    },

    removeItem: (state, action) => {
        const newCartItems = state.cartItems.filter((cartItem) => action.payload !== cartItem._id)
        state.cartItems = newCartItems
    },

   
    editItemQuantity: (state, action) => {
  const { incrementType, _id } = action.payload;
  const item = state.cartItems.find(item => item._id === _id);
  if (item) {
    item.quantity += incrementType === 'increase' ? 1 : -1;
  }
}
   
  }
});

export const { openCart, closeCart, addItem, removeItem, editItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;

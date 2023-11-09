import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            // state.items.filter((arrow) =>{ return arrow.id !== action.payload})
            state.items.splice(state.items.findIndex((arrow) => arrow.id === action.payload), 1);
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
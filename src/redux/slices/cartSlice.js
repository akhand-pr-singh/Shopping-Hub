import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            let find = state.items.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.items[find].quantity += 1;
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 });
            }

        },

        remove(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        increaseQuantity(state, action) {
            state.items = state.items.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },

        decreaseQuantity(state, action) {
            state.items = state.items.map(item=>{
                if(item.id === action.payload){
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });
        },

        getCartTotal(state) {
            let {totalQuantity, totalPrice} = state.items.reduce(
                (cartTotal, cartItem)=>{
                    const {price, quantity} = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalQuantity: 0,
                    totalPrice: 0,
                }
            );

            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        }
    }
});

export const { add, remove, increaseQuantity, decreaseQuantity, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartData",
    initialState: {cartData: [], size: []},
    reducers: {
        setCartData: (state, action) => {
            const item = action.payload;
            const exist = state.cartData.find((data) => data.id === item.id)


            if(exist) {
                exist.quantity += 1;
            } else {
                state.cartData.push({...item, quantity: 1})
            }
        },
        cartIncrement: (state, action) => {
            const item = state.cartData.find((item) => item.id === action.payload);

            if(item) {
                item.quantity += 1;
            }
        },
        cartDecrement: (state, action) => {
            const item = state.cartData.find((item) => item.id === action.payload);

            if(item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.cartData = []

        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartData= state.cartData.filter((data) => data.id !== item)

        },
        setSize: (state, action) => {
            state.size = action.payload;
        }

    },
});


export default cartSlice.reducer;
export const { setCartData, setSize, clearCart,removeFromCart, cartIncrement, cartDecrement } = cartSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const clothSlice = createSlice({
    name: "products",
    initialState: {product: []},
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        }

    },
});


export default clothSlice.reducer;
export const { setProduct } = clothSlice.actions;
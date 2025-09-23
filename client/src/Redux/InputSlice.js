import { createSlice } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
    name: "search",
    initialState: {dataInput: ""},
    reducers: {
        setInput: (state, action) => {
            state.dataInput = action.payload;
        }

    },
});


export default searchInputSlice.reducer;
export const { setInput } = searchInputSlice.actions;
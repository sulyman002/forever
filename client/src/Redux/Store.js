import { configureStore } from "@reduxjs/toolkit";
import clothSliceReduce from "./ClothDataSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import inputSliceReducer from "./InputSlice.js"
import cartDataNewArray from "./CartDataSlice.js"
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: "root",
    storage,
}

const persistedClothReducer = persistReducer(persistConfig, clothSliceReduce);
const persistedCartDataReducer = persistReducer(persistConfig, cartDataNewArray )

const store = configureStore({
    reducer: {
        // pass reducers here {key:  reducerName}
        clothRed: persistedClothReducer,
        inputRed: inputSliceReducer,
        cartRed: persistedCartDataReducer,



    }
})

export const persistor = persistStore(store)
export default store;
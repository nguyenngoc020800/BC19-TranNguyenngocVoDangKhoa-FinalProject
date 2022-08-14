import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./Redux/Home/LocationSlice";
import filterSlice from "./Redux/Home/filterSlice";

const store = configureStore({
  reducer: {
    location: locationSlice,
    filter: filterSlice,
  },
});

export default store;

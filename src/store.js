import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./Redux/Home/locationSlice";
import filterSlice from "./Redux/Home/filterSlice";
import authSlice from "./Redux/auth/authSlice";

const store = configureStore({
  reducer: {
    location: locationSlice,
    filter: filterSlice,
    auth: authSlice,
  },
});

export default store;

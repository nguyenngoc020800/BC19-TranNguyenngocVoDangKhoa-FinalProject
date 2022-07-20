import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./modules/Home/slice/locationSlice";

const store = configureStore({
  reducer: {
    location: locationSlice,
  },
});

export default store;

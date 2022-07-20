import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
});

export default locationSlice.reducer;

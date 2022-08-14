import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocationList } from "../../apis/homeAPI";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const getLocationLists = createAsyncThunk(
  "location/getlocationlist",
  async () => {
    return await getLocationList();
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  extraReducers: {
    [getLocationLists.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getLocationLists.fulfilled]: (state, action) => {
      return { ...state, data: action.payload, isLoading: false };
    },
    [getLocationLists.rejected]: (state, action) => {
      return { ...state, error: action.error, isLoading: false };
    },
  },
});

export default locationSlice.reducer;

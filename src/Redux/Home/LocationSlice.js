import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocationList, getRoomByID } from "../../apis/homeAPI";

const initialState = {
  room: [],
  data: [],
  isLoading: false,
  roomLoading: false,
  error: null,
  roomError: null,
};

export const getLocationLists = createAsyncThunk(
  "location/getlocationlist",
  async () => {
    return await getLocationList();
  }
);
export const getRoomById = createAsyncThunk("getRoombyId", async (id) => {
  return await getRoomByID(id);
});

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
    [getRoomById.pending]: (state) => {
      return { ...state, roomLoading: true };
    },
    [getRoomById.fulfilled]: (state, action) => {
      return { ...state, room: action.payload, roomLoading: false };
    },
    [getRoomById.rejected]: (state, action) => {
      return { ...state, roomError: action.error, roomLoading: false };
    },
  },
});

export default locationSlice.reducer;

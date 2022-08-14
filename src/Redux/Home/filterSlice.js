import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  ngayden: null,
  ngaydi: null,
  numberPerson: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
});

export default filterSlice.reducer;

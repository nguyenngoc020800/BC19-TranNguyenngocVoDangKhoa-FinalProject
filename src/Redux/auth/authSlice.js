import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../apis/authAPI";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,
};

export const loginPage = createAsyncThunk("auth/login", async (data) => {
  const user = await login(data);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
});

export const registerPage = createAsyncThunk("auth/register", async (data) => {
  return await register(data);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [loginPage.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [loginPage.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, user: action.payload };
    },
    [loginPage.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    },
    [registerPage.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [registerPage.fulfilled]: (state, action) => {
      return { ...state, isLoading: false };
    },
    [registerPage.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    },
  },
});

export default authSlice.reducer;

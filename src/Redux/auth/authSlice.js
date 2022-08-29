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
  reducers: {
    logOut: (state) => {
      localStorage.setItem("user", null);
      return { ...state, user: null };
    },
  },
  extraReducers: {
    [loginPage.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [loginPage.fulfilled]: (state, action) => {
      alert("bạn đã đăng nhập thành công ");

      return { ...state, isLoading: false, user: action.payload, error: null };
    },
    [loginPage.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    },
    [registerPage.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [registerPage.fulfilled]: (state) => {
      alert("bạn đã đăng kí thành công ");

      return { ...state, isLoading: false, error: null };
    },
    [registerPage.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.error.message };
    },
  },
});

export default authSlice.reducer;

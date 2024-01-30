import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  refresh: null,
  IsAuthenticated: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signInSuccess(state, action) {
      const { token } = action.payload;
      if (token) {
        const { refresh, access } = token;
        state.currentUser = access;
        state.refresh = refresh;
        state.IsAuthenticated = true;
      }
    },
  },
});

export const getCurrentUser = (state) => state.login.currentUser;
export const getRefresh = (state) => state.login.refresh;
export const getAunthentication = (state) => state.login.IsAuthenticated;

export const { signInSuccess } = loginSlice.actions;

export default loginSlice.reducer;

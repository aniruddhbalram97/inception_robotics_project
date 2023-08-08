import { createSlice } from "@reduxjs/toolkit";

export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    theme: "light",
    authenticated: false,
    email: false,
    auth: "login",
    view: "Summary",
    selectedData: false,
    requestedData: false,
    robot_id: false,
  },
  reducers: {
    themeSelector: (state, action) => {
      state.theme = action.payload;
    },
    authToggle: (state, action) => {
      state.auth = action.payload;
    },
    toggleView: (state, action) => {
      state.view = action.payload;
    },
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
      state.robot_id = action.payload["unique_id"];
    },
    setIsAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
    setRequestedData: (state, action) => {
      state.requestedData = action.payload;
    },
    setUserDetails: (state, action) => {
      state.email = action.payload;
    },
    resetState: (state, action) => {
      state.authenticated = false;
      state.email = false;
      state.selectedData = false;
      state.requestedData = false;
      state.robot_id = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  themeSelector,
  authToggle,
  toggleView,
  setSelectedData,
  setIsAuthenticated,
  setRequestedData,
  setUserDetails,
  resetState,
} = appReducer.actions;

export default appReducer.reducer;

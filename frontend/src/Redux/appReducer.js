import { createSlice } from "@reduxjs/toolkit";

export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    theme: "light",
    isAuthenticated: false,
    email: false,
    auth: "login",
    view: "Summary",
    selectedData: false,
    requestedData: false,
    robot_id: false,
    infoMessage: false,
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
      state.isAuthenticated = action.payload;
    },
    setRequestedData: (state, action) => {
      state.requestedData = action.payload;
    },
    setUserDetails: (state, action) => {
      state.email = action.payload;
    },
    resetState: (state, action) => {
      state.isAuthenticated = false;
      state.email = false;
      state.selectedData = false;
      state.requestedData = false;
      state.robot_id = false;
    },
    setInfoMessage: (state, action) => {
      state.infoMessage = action.payload;
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
  setInfoMessage,
} = appReducer.actions;

export default appReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    theme: "light",
    auth: "login",
    view: "Summary",
    selectedData: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { themeSelector, authToggle, toggleView, setSelectedData } =
  appReducer.actions;

export default appReducer.reducer;

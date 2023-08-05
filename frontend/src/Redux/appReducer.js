import { createSlice } from '@reduxjs/toolkit'

export const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    theme: "dark",
    auth:"login",
  },
  reducers: {
    themeSelector: (state, action) => {
      state.theme = action.payload
    },
    authToggle:(state,action) => {
      state.auth = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { themeSelector, authToggle } = appReducer.actions

export default appReducer.reducer
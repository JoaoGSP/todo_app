import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'dark',
    defaultTheme: true
  },
  reducers: {
    lightTheme(state) {
      return{...state, defaultTheme: false, currentTheme: 'light'}
    },
    darkTheme(state){
      return{...state, defaultTheme: true, currentTheme: 'dark'}
    }
  }
})

export const { lightTheme, darkTheme } = slice.actions;

export const selectedTheme = state => state.theme.currentTheme

export default slice.reducer
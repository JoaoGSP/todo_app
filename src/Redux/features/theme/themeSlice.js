import { createSlice } from "@reduxjs/toolkit";

const darkThemeParams = {
  colors: {
    primary: "#3a7bfd",

    CheckBackground: "linear-gradient #57ddff to #c058f3",

    Background: "#161722",
    Background_MainComponent: "	#25273c",
    LightGrayish_Blue: "#cacde8",
    LightGrayishBlue_Hover: "#e4e5f1",
    DarkGrayish_Blue: "#777a92",
    Text: "#4d5066",
    VeryDarkGrayish_Blue: "	#393a4c",
  },

  images: {
    Bg_Desktop: "/images/bg-desktop-dark.jpg",
    Bg_Mobile: "/images/bg-mobile-dark.jpg",
  },
}

const lightThemeParams = {
  colors: {
    primary: "#3a7bfd",

    CheckBackground: "linear-gradient #57ddff to #c058f3",

    Background: "#fafafa",
    VeryLightGrayish_Blue: "#e4e5f1",
    Light_Grayish_Blue: "#d2d3db",
    Dark_Grayish_Blue: "#9394a5",
    VeryDarkGrayish_Blue: "#484b6a",
  },

  images: {
    Bg_Desktop: "/images/bg-desktop-light.jpg",
    Bg_Mobile: "/images/bg-mobile-light.jpg",
  },
}

export const slice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "dark",
    defaultTheme: true,
    definitions: darkThemeParams,
  },
  reducers: {
    setLightTheme(state) {
      return {
        ...state,
        defaultTheme: false,
        currentTheme: "light",
        definitions: lightThemeParams,
      };
    },
    setDarkTheme(state) {
      return { ...state, defaultTheme: true,
        currentTheme: "dark",
        definitions: darkThemeParams, };
    },
  },
});

export const { setTheme, setLightTheme, setDarkTheme } = slice.actions;

export const themeProps = (state) => state.theme.definitions;

export default slice.reducer;

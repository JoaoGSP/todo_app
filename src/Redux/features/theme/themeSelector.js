import React from "react";
import { useDispatch } from "react-redux";

import { setDarkTheme, setLightTheme } from "../src/Redux/features/theme/themeSlice";

export default function ThemeSelector() {
  const dispatch = useDispatch();
  function lightThemeSet() {
    dispatch(setLightTheme())
  }
  function darkThemeSet() {
    dispatch(setDarkTheme())
  }
  return (
    <>
      <button onClick={lightThemeSet}>Light</button>
      <button onClick={darkThemeSet}>Darj</button>
    </>
  );
}

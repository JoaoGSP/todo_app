import styled from "styled-components";
import { darkTheme, lightTheme } from "../src/store/themeSlice";
import { useDispatch } from "react-redux";


export default function Home() {
  const dispatch = useDispatch();
  function lightThemeSet() {
    dispatch(lightTheme())
  }
  function darkThemeSet() {
    dispatch(darkTheme())
  }
  return (
    <>
      <button onClick={lightThemeSet}>Light</button>
      <button onClick={darkThemeSet}>Dark</button>
    </>
  );
}

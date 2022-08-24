import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

import { selectedTheme } from "../../src/store/themeSlice";
import { useSelector } from "react-redux";

import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";

import dark from "./dark";
import light from "./light";

export default function ThemeMaster() {
  const [themeApplied, setThemeApplied] = useState(dark);
  const theme = useSelector(selectedTheme);
  useEffect(() => {
    theme === 'light' ? setThemeApplied(light) : setThemeApplied(dark)
  }, [theme]);

  return (
    <ThemeProvider theme={themeApplied}>
      <GlobalStyle />
      <Header />
      <Footer />
    </ThemeProvider>
  );
}

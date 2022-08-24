import React from "react";
import { useSelector } from "react-redux";
import { themeProps } from "../../src/Redux/features/theme/themeSlice";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

export default function GlobalStyleRender() {
  const themeDefinitions = useSelector(themeProps);
  return (
    <ThemeProvider theme={{ themeDefinitions }}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

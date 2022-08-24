import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background: ${props => props.theme.colors.Background};
        color: ${props => props.theme};
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
    }
`;

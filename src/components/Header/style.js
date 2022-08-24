import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -999;
  background-image: url(${props => props.theme.themeDefinitions.images.Bg_Desktop});
  background-repeat: no-repeat;
  @media (max-width: 375px) {
    background-image: url(${props => props.theme.themeDefinitions.images.Bg_Mobile});
    height: 175px;
  }
`;
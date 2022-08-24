import styled from "styled-components";

export const Container = styled.footer`
  height: 10%;
  width: 100%;
  background: blue;
  position: absolute;
  top: 90%;
  display: flex;
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    height: 10%;
    p {
      font-size: 1rem;
    }
  }
`;
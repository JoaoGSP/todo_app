import styled from "styled-components";

export const Container = styled.footer`
  height: 150px;
  width: 100%;
  background: none;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 375px) {
    height: 75px;
    p {
      font-size: 1rem;
    }
  }
`;
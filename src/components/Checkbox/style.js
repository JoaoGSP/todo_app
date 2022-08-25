import styled from "styled-components";
export const CheckboxContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;

  background: ${(props) => props.bg};

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 1px;
  padding: 0;
  z-index: -999;
`;

export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

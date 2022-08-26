import styled from "styled-components";
export const CheckboxContainer = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-left: 15px;
  border: ${(props) => props.checked? '' : '1px solid' };
  border-color: ${(props) => props.theme.theme.colors.Lines};

  background: url(${(props) => (props.checked ? props.theme.theme.icons.CheckIcon : "none")});
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px) {
    margin-left: 5px;
  }
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
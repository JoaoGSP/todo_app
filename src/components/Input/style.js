import styled from "styled-components";

export const InputField = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 10%;
  background-color: purple;
  margin-top: 5%;
  align-items: center;

  input {
    color: #4d5066;
    border: none;
    background: none;
    padding: 20px 24px;
    display: flex;
    flex: 1;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Josefin Sans", sans-serif;

    ::placeholder {
      color: "#606175";
      font-weight: bold;
      font-size: 1.5rem;
      justify-self: center;
    }
  }
`;
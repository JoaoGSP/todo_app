import styled from "styled-components";
import InputComponent from "../src/components/Input";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 90vh;
  background-color: red;
  margin-left: 30vw;
  margin-top: 5%;
  @media (max-width: 375px) {
    width: 90vw;
    margin-top: 10%;
    margin-left: 5vw;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: relative;
  width: 100%;
  height: 10%;
  background-color: yellow;
  margin-top: 0px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: hsl(0, 0%, 98%);
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: hsl(0, 0%, 98%);
    }
  }
`;

const TodosWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 65%;
  margin-top: 5%;
  background-color: green;
  @media (max-width: 375px) {
    height: 80%;
  }
`;


export default function Home() {
  return (
    <ContentWrapper>
      <Header>
        <h1>TODO</h1>
        <button>Qualquer coisa</button>
      </Header>
      <InputComponent placeholder='Create a new'/>
      <TodosWrapper />
    </ContentWrapper>
  );
}

import styled from "styled-components";

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
  position: relative;
  width: 100%;
  height: 10%;
  background-color: yellow;
  margin-top: 0px;
`
const TodosWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 60%;
  margin-top: 5%;
  background-color: green;
`

export default function Home() {
  return (
    <ContentWrapper>
      <Header />
      <TodosWrapper />
    </ContentWrapper>
  );
}

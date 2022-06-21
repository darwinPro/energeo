import styled from "styled-components";

const Box = styled.div`
  padding-bottom: 0px;
  padding-top: 0px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1200px;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContainer = ({ children }) => {
  return (
    <Main>
      <Box>{children}</Box>
    </Main>
  );
};

export default MainContainer;

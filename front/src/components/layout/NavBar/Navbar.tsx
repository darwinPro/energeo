import styled from "styled-components";
import { colors } from "../../../utils/styles";
import Links from "./Links";
import Logo from "./Logo";
import User from "./User";
import MainContainer from "../../layout/MainContainer";

const Container = styled.div`
  display: flex;
  color: ${colors.primary};
  margin-top: 12px;
  margin-bottom: 12px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Espacer = styled.div`
  display: flex;
  flex: 1;
`;

const Main = styled.div`
  background: white;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(238, 238, 238, 1) 21%,
    rgba(238, 238, 238, 1) 78%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const Navbar = () => {
  return (
    <Main>
      <MainContainer>
        <Container>
          <Logo />
          <Espacer />
          <User />
        </Container>
        <Divider />
        <Container>
          <LinksContainer>
            <Links />
          </LinksContainer>
        </Container>
      </MainContainer>
    </Main>
  );
};

export default Navbar;

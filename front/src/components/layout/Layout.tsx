import Footer from "./Footer";
import Navbar from "./NavBar";
import styled from "styled-components";

const BoxContainer = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  min-height: 90vh;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BoxContainer>{children}</BoxContainer>
      <Footer />
    </div>
  );
};

export default Layout;

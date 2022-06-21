import styled from "styled-components";

const Container = styled.div`
  background: #ececec;
  padding: 2em 1em;
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <p>Copyright Nerenco @2021</p>
    </Container>
  );
};

export default Footer;

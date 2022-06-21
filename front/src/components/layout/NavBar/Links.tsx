import styled from "styled-components";
import CustomLink from "./CustomLink";

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: stretch;
  gap: 16px;
`;

const Links = () => {
  return (
    <Container>
      <CustomLink href="/" text="Home"></CustomLink>
      <CustomLink href="/clients" text="Clients"></CustomLink>
      <CustomLink href="/users" text="Users"></CustomLink>
      <CustomLink href="/dashboard" text="Dashboard"></CustomLink>
      <CustomLink href="/configuration" text="Configuration"></CustomLink>
    </Container>
  );
};

export default Links;

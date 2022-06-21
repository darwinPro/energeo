import Link from "next/link";
import styled from "styled-components";
import { colors } from "../../../utils/styles";

const SLink = styled.a`
  padding: 8px;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-self: stretch;
  align-items: center;
  text-decoration: unset;
  color: unset;
  cursor: pointer;
  :hover {
    background-color: ${colors.primary};
    color: white;
    font-weight: bold;
  }
`;

const CustomLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <SLink>{text}</SLink>
    </Link>
  );
};

export default CustomLink;

import React from "react";
import styled from "styled-components";

const ContainerModal = styled.div`
  padding-top: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`;

const ModalContainer = ({ children }) => {
  return <ContainerModal>{children}</ContainerModal>;
};

export default ModalContainer;

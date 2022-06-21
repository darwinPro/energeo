import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Progress = ({ title }: { title: string }) => {
  return (
    <Container>
      <CircularProgress />
      <p style={{marginLeft:24}}>{title}</p>
    </Container>
  );
};

export default Progress;

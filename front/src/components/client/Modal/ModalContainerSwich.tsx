import React from "react";
import { Modal, Paper, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContainerModal = styled.div`
  min-width: 350px;
`;

const ModalContainerSwich = ({
  children,
  open = false,
  handleClose,
  title,
}: {
  children?;
  open?;
  handleClose?: () => void;
  title?: string;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
        <ContainerModal>
          <Paper elevation={0}>
            <Toolbar>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
            </Toolbar>
            <ModalContainer>{children}</ModalContainer>
          </Paper>
        </ContainerModal>
      </Container>
    </Modal>
  );
};

export default ModalContainerSwich;

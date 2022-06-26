import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useUser from "../../../utils/auth/useUser";
import { colors } from "../../../utils/styles";
import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
  Popover,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: colors.primary,
  },
});

const Container = styled.div`
  display: flex;
`;

const ContainerPooper = styled.div`
  padding: 16px;
  min-width: 300px;
`;

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
`;

const User = () => {
  const { isAuthenticated, user, login, logout, loading } = useUser();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      {loading && <ContainerDiv>Loading...</ContainerDiv>}
      {!loading && isAuthenticated && (
        <ContainerDiv>
          <Button
            aria-describedby={id}
            variant="contained"
            color="default"
            onClick={handleClick}
            style={{
              padding: "0px",
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <ListItem button alignItems="flex-start" style={{ padding: 0 }}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName} ${user.lastName}`}
                secondary={<React.Fragment>{user.role}</React.Fragment>}
              />
            </ListItem>
          </Button>
          <Popover
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <ContainerPooper>
              <Typography variant="subtitle1" gutterBottom typeof="strong">
                <strong>Profile:</strong>
              </Typography>
              <Divider />
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell width={160}>Prénom :</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width={160}>Nom de Famille :</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width={160}>Email :</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell width={160}>Role :</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br />
              <Button
                variant="outlined"
                className={classes.root}
                onClick={logout}
              >
                Logout
              </Button>
            </ContainerPooper>
          </Popover>
        </ContainerDiv>
      )}
      {!loading && !isAuthenticated && (
        <ContainerDiv>
          <Button className={classes.root} onClick={login}>
            Login
          </Button>
        </ContainerDiv>
      )}
    </Container>
  );
};

export default User;

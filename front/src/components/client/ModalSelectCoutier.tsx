import React from "react";
import { useUsersQuery, User, UserRole } from "../../generated/graphql";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Modal,
  Paper,
  Toolbar,
} from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContainerModal = styled.div`
  min-width: 350px;
`;

const ModalSelectCoutier = ({
  user,
  open = false,
  handleClose,
  onSaveSelect,
}: {
  user?: User;
  open?;
  handleClose?: () => void;
  onSaveSelect?: (user: User) => void;
}) => {
  const { data, loading, error } = useUsersQuery();
  const users = data?.users?.users.filter(
    (user) => (user.role === UserRole.Sales)
  );
  const [checkedUser, setCheckedUser] = React.useState<User[]>(
    user ? [user] : []
  );

  const handleToggle = (user: User) => () => {
    setCheckedUser([user]);
  };

  if (loading) return <div>Loading... </div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

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
              <Typography variant="h6" component="h2">
                Assistance de sélection:
              </Typography>
            </Toolbar>
            <Divider />
            {users && (
              <List>
                {users.map((user) => (
                  <ListItem button key={user.id} onClick={handleToggle(user)}>
                    <ListItemText>
                      {`${users.indexOf(user) + 1}. ${user.firstName} ${
                        user.lastName
                      }`}
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(user)}
                        checked={checkedUser.indexOf(user) !== -1}
                        //inputProps={{ "aria-labelledby": user. }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}

            <Divider />
            <Toolbar>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  onClick={() => onSaveSelect(checkedUser[0])}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </ButtonGroup>{" "}
            </Toolbar>
            {/*   {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )} */}
          </Paper>
        </ContainerModal>
      </Container>
    </Modal>
  );
};

export default ModalSelectCoutier;

import React, { useState } from "react";
import {
  UpdateUserInput,
  User,
  UserState,
  useUpdateUserMutation,
} from "../../generated/graphql";
import {
  IconButton,
  Popover,
  TableCell,
  TableRow,
  MenuList,
  MenuItem,
  ListItemIcon,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Delete from "@material-ui/icons/Delete";
import ModalContainerSwich from "../client/Modal/ModalContainerSwich";

const ItemTableUser = ({ user, index }: { user?: User; index?: Number }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [updateUserMutation] = useUpdateUserMutation({
    refetchQueries: ["Users", "User"],
  });

  const updateUser = (user: UpdateUserInput, userState: UserState) =>
    updateUserMutation({
      variables: {
        input: {
          id: user.id,
          state: userState,
        },
      },
    });

  const onSave = async () => {
    await updateUser(user as UpdateUserInput, UserState.Disabled);
    setIsEditing(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>{index}</TableCell>
      <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
      <TableCell>{`${user.email}`}</TableCell>
      <TableCell>{`${user.role}`}</TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
      </TableCell>

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
        <MenuList>
          <MenuItem
            onClick={() => {
              setIsEditing(true);
              handleClose();
            }}
          >
            <ListItemIcon aria-describedby={id} style={{ minWidth: "40px" }}>
              <Delete />
            </ListItemIcon>
            Delete
            <div style={{ width: 40 }} />
          </MenuItem>
        </MenuList>
      </Popover>

      <ModalContainerSwich
        open={isEditing}
        handleClose={() => setIsEditing(false)}
        title={"Delete user"}
      >
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => onSave()}>Accepter</Button>
          <Button onClick={() => setIsEditing(false)}>Annuler</Button>
        </ButtonGroup>
      </ModalContainerSwich>
    </TableRow>
  );
};

export default ItemTableUser;

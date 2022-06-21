import React, { useState } from "react";
import { Client, User, UserRole } from "../../../generated/graphql";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import {
  UpdateClientInput,
  useUpdateClientMutation,
} from "../../../generated/graphql";
import ModalSelectCoutier from "../ModalSelectCoutier";
import useUser from "../../../utils/auth/useUser";

const ClientDisplayCoutier = ({
  client,
}: {
  client?: Client;
}) => {
  const { user, isAuthenticated } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [updateClientMutation] = useUpdateClientMutation({
    refetchQueries: ["Clients", "Client"],
  });

  const updatelient = (client: UpdateClientInput, user: User) =>
    updateClientMutation({
      variables: {
        input: {
          id: client.id,
          salesId: user.id,
        },
      },
    });

  const onSave = async (user: User) => {
    await updatelient(client as UpdateClientInput, user);
    setIsEditing(false);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <Paper elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="h2">
          Assistance de ventas:
        </Typography>
      </Toolbar>
      <Divider />
      <Table size="small">
        {client.salesId !== null && (
          <TableBody>
            <TableRow>
              <TableCell width={170}>Prénom :</TableCell>
              <TableCell>{client?.sales?.firstName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={170}>Nom de Famille :</TableCell>
              <TableCell>{client?.sales?.lastName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={170}>Email :</TableCell>
              <TableCell>{client?.sales?.email}</TableCell>
            </TableRow>
          </TableBody>
        )}
        {client.salesId === null && (
          <TableBody>
            <TableRow>
              <TableCell>pas d'asignado</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>

      <ModalSelectCoutier
        open={isEditing}
        handleClose={handleClose}
        onSaveSelect={(user) => onSave(user)}
        user={client.salesId && client.sales}
      />

      {isAuthenticated && (
        <>
          {user.role === UserRole.Admin && (
            <Toolbar>
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                onClick={() => setIsEditing(true)}
              >
                Cambiar d'assistance
              </Button>
            </Toolbar>
          )}
        </>
      )}

    </Paper>
  );
};

export default ClientDisplayCoutier;

import React, { useState } from "react";
import {
  Client,
  UpdateClientInput,
  useUpdateClientMutation,
  ClientState,
} from "../../../generated/graphql";
import { Button, Divider, Paper, Toolbar } from "@material-ui/core";
import useUser from "../../../utils/auth/useUser";
import { UserRole } from "../../../generated/graphql";
import ModalContainerSwich from "../Modal/ModalContainerSwich";
import { Typography } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ClientDisplayDelete = ({
  client,
  onChange,
}: {
  client?: Client;
  onChange?: () => void;
}) => {
  const { user, isAuthenticated } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [updateClientMutation] = useUpdateClientMutation({
    refetchQueries: ["Clients", "Client"],
  });

  const updatelient = (client: UpdateClientInput) =>
    updateClientMutation({
      variables: {
        input: {
          state: ClientState.Disabled,
          id: client.id,
        },
      },
    });

  const onDelete = async () => {
    await updatelient(client as UpdateClientInput);
    setIsEditing(false);
    onChange();
  };

  return (
    <Paper elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="h2">
          Warning :
        </Typography>
      </Toolbar>
      <Divider />
      <Toolbar>
        {isAuthenticated && (
          <>
            {user?.role === UserRole.Admin && (
              <Button
                variant="outlined"
                size="medium"
                color="primary"
                component="span"
                onClick={() => setIsEditing(true)}
              >
                Supprimer le client: {client.name}
              </Button>
            )}
          </>
        )}
      </Toolbar>
      <ModalContainerSwich
        open={isEditing}
        handleClose={() => setIsEditing(false)}
        title="êtes-vous sûr de désactiver ce client"
      >
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => onDelete()}>Accepter</Button>
          <Button onClick={() => setIsEditing(false)}>Annuler</Button>
        </ButtonGroup>
      </ModalContainerSwich>
    </Paper>
  );
};

export default ClientDisplayDelete;

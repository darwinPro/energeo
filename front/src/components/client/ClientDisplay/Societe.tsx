import React, { useState } from "react";
import { Client } from "../../../generated/graphql";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Divider,
  InputBase,
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
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

const ClientDisplaySociete = ({
  client,
}: {
  client?: Client;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const classes = useStyles();
  const [dataUpdateClient, setDataUpdateClient] = useState(
    (client || {}) as UpdateClientInput
  );
  const [updateClientMutation, { loading }] = useUpdateClientMutation({
    refetchQueries: ["Clients", "Client"],
  });

  const updatelient = (client: UpdateClientInput) =>
    updateClientMutation({
      variables: {
        input: {
          name: client.name,
          id: client.id,
        },
      },
    });

  const onSave = async () => {
    await updatelient(dataUpdateClient);
    setIsEditing(false);
  };

  return (
    <Paper elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="h2">
          Informations sur la société :
        </Typography>
      </Toolbar>
      <Divider />
      <Table size="small">
        <TableBody>
          {!isEditing && (
            <TableRow>
              <TableCell width={170}>Nom du client :</TableCell>
              <TableCell>{client?.name}</TableCell>
            </TableRow>
          )}
          {isEditing && (
            <TableRow>
              <TableCell width={170}>Nom du client :</TableCell>
              <TableCell>
                <InputBase
                  name="firstName"
                  value={dataUpdateClient.name || ""}
                  onChange={(event) =>
                    setDataUpdateClient({
                      ...dataUpdateClient,
                      name: event.target.value,
                    })
                  }
                  placeholder="Nom du client"
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Toolbar>
        {!isEditing && (
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={() => setIsEditing(true)}
          >
            Modifier le société
          </Button>
        )}
        {isEditing && (
          <div className={classes.wrapper}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => onSave()}
              >
                Save
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </ButtonGroup>
          </div>
        )}
      </Toolbar>
    </Paper>
  );
};

export default ClientDisplaySociete;


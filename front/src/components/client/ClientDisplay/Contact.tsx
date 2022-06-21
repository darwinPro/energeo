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

const ClientDisplayContact = ({
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
          id: client.id,
          contact: {
            firstName: dataUpdateClient.contact.firstName,
            lastName: dataUpdateClient.contact.lastName,
            phone: dataUpdateClient.contact.phone,
            email: dataUpdateClient.contact.email,
            birthDate: dataUpdateClient.contact.birthDate,
          },
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
          Informations du contact Client :
        </Typography>
      </Toolbar>
      <Divider />
      <Table size="small">
        <TableBody>
          {!isEditing && (
            <>
              <TableRow>
                <TableCell width={170}>Prénom :</TableCell>
                <TableCell>{client?.contact?.firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Nom de Famille :</TableCell>
                <TableCell>{client?.contact?.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>N° de Téléphone :</TableCell>
                <TableCell>{client?.contact?.phone}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Email :</TableCell>
                <TableCell>{client?.contact?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Date de Naissance :</TableCell>
                <TableCell>{client?.contact?.birthDate}</TableCell>
              </TableRow>
            </>
          )}
          {isEditing && (
            <>
              <TableRow>
                <TableCell width={170}>Prénom :</TableCell>
                <TableCell>
                  <InputBase
                    name="firstName"
                    value={dataUpdateClient.contact?.firstName || ""}
                    onChange={(event) =>
                      setDataUpdateClient({
                        ...dataUpdateClient,
                        contact: {
                          ...dataUpdateClient.contact,
                          firstName: event.target.value,
                        },
                      })
                    }
                    placeholder="Prénom"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Nom de famille :</TableCell>
                <TableCell>
                  <InputBase
                    name="lastName"
                    value={dataUpdateClient.contact?.lastName || ""}
                    onChange={(event) =>
                      setDataUpdateClient({
                        ...dataUpdateClient,
                        contact: {
                          ...dataUpdateClient.contact,
                          lastName: event.target.value,
                        },
                      })
                    }
                    placeholder="Nom de famille"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Numéro de telephone :</TableCell>
                <TableCell>
                  <InputBase
                    type="text"
                    name="phone"
                    value={dataUpdateClient.contact?.phone || ""}
                    onChange={(event) =>
                      setDataUpdateClient({
                        ...dataUpdateClient,
                        contact: {
                          ...dataUpdateClient.contact,
                          phone: event.target.value,
                        },
                      })
                    }
                    placeholder="N°de téléphone"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Email :</TableCell>
                <TableCell>
                  <InputBase
                    name="email"
                    value={dataUpdateClient.contact?.email || ""}
                    onChange={(event) =>
                      setDataUpdateClient({
                        ...dataUpdateClient,
                        contact: {
                          ...dataUpdateClient.contact,
                          email: event.target.value,
                        },
                      })
                    }
                    placeholder="Email"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width={170}>Date de Naissance :</TableCell>
                <TableCell>
                  <InputBase
                    type="date"
                    name="birthDate"
                    value={dataUpdateClient.contact?.birthDate || ""}
                    onChange={(event) =>
                      setDataUpdateClient({
                        ...dataUpdateClient,
                        contact: {
                          ...dataUpdateClient.contact,
                          birthDate: event.target.value,
                        },
                      })
                    }
                    placeholder="Date Naissance"
                  />
                </TableCell>
              </TableRow>
            </>
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
            </ButtonGroup>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        )}
      </Toolbar>
    </Paper>
  );
};

export default ClientDisplayContact;

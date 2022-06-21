import React, { useState } from "react";
import { Client } from "../../../generated/graphql";
import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListSubheader,
  Paper,
} from "@material-ui/core";
import {
  UpdateClientInput,
  useUpdateClientMutation,
  ClientState,
} from "../../../generated/graphql";
import ModalContainerSwich from "../Modal/ModalContainerSwich";


const states = {
  Initial: {
    color: "#ffffff",
    text: "1. Initial",
  },
  AwaitingCotation: {
    color: "#BE1309",
    text: "2. En attente des factures et ACD du client",
  },
  CotationReceived: {
    color: "#FB5B1A",
    text: "3. En attente de la cotation nerenco",
  },
  FileClosed: {
    color: "#F9C533",
    text: "4. Pas possible clore le dossier",
  },
  CotationSigned: {
    color: "#53B800",
    text: "5. Client cotation signé",
  },
  CotationValidated: {
    color: "#39B1E5",
    text: "6. Client cotation signé et vérifié par Nerenco",
  },
  TransactionSecured: {
    color: "#3B499F",
    text: "7. Securisation de transaction",
  }
};

const ClientDisplayState = ({
  client,
}: {
  client?: Client;
}) => {
  const [updateClientMutation, { loading }] = useUpdateClientMutation({
    refetchQueries: ["Clients", "Client"],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [clientState, setClientState] = useState<ClientState>();

  const updatelient = (client: UpdateClientInput, clientState: ClientState) =>
    updateClientMutation({
      variables: {
        input: {
          id: client.id,
          state: clientState,
        },
      },
    });

  const onSave = async () => {
    await updatelient(client as UpdateClientInput, clientState);
    setIsEditing(false);
  };

  return (
    <Paper elevation={0} style={{ top: 0, zIndex: 1, position: "sticky" }}>
      <List
        component="div"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div">
            {loading && <>état d'enregistrement</>}
            {!loading && <>État de l'onglet</>}
          </ListSubheader>
        }
      >
        <ListItem
          button
          style={{
            background: client.state === "initial" ? states.Initial.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.Initial);
            setIsEditing(true);
            setTitleModal(states.Initial.text);
          }}
        >
          1. Initial
        </ListItem>
        <ListItem
          button
          style={{
            background:
              client.state === "awaitingCotation" ? states.AwaitingCotation.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.AwaitingCotation);
            setIsEditing(true);
            setTitleModal(states.AwaitingCotation.text);
          }}
        >
          2. En attente des factures et ACD du client
        </ListItem>
        <ListItem
          button
          style={{
            background:
              client.state === "cotationReceived" ? states.CotationReceived.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.CotationReceived);
            setIsEditing(true);
            setTitleModal(states.CotationReceived.text);
          }}
        >
          3. En attente de la cotation nerenco
        </ListItem>
        <ListItem
          button
          style={{
            background: client.state === "fileClosed" ? states.FileClosed.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.FileClosed);
            setIsEditing(true);
            setTitleModal(states.FileClosed.text);
          }}
        >
          4. Pas possible clore le dossier
        </ListItem>
        <ListItem
          button
          style={{
            background: client.state === "cotationSigned" ? states.CotationSigned.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.CotationSigned);
            setIsEditing(true);
            setTitleModal(states.CotationSigned.text);
          }}
        >
          5. Client cotation signé
        </ListItem>
        <ListItem
          button
          style={{
            background:
              client.state === "cotationValidated" ? states.CotationValidated.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.CotationValidated);
            setIsEditing(true);
            setTitleModal(states.CotationValidated.text);
          }}
        >
          6. Client cotation signé et vérifié par Nerenco
        </ListItem>
        <ListItem
          button
          style={{
            background:
              client.state === "transactionSecured" ? states.TransactionSecured.color : "white",
            borderRadius: 10,
          }}
          onClick={() => {
            setClientState(ClientState.TransactionSecured);
            setIsEditing(true);
            setTitleModal(states.TransactionSecured.text);
          }}
        >
          7. Securisation de transaction
        </ListItem>
      </List>
      <ModalContainerSwich
        open={isEditing}
        handleClose={() => setIsEditing(false)}
        title={titleModal}
      >
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => onSave()}>Accepter</Button>
          <Button onClick={() => setIsEditing(false)}>Annuler</Button>
        </ButtonGroup>
      </ModalContainerSwich>
    </Paper>
  );
};

export default ClientDisplayState;

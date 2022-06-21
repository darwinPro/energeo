import React from "react";
import {
  ClientState,
} from "../../../generated/graphql";
import styled, { css } from "styled-components";

const ContainerItem = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 8px;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

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

const ClientDisplayStateTableList = ({ state }: { state: ClientState }) => {
  switch (state) {
    case ClientState.Initial:
      return <ContainerItem color={states.Initial.color}>{states.Initial.text}</ContainerItem>;
    case ClientState.AwaitingCotation:
      return (
        <ContainerItem color={states.AwaitingCotation.color}>
          {states.AwaitingCotation.text}
        </ContainerItem>
      );
    case ClientState.CotationReceived:
      return (
        <ContainerItem color={states.CotationReceived.color}>
          {states.CotationReceived.text}
        </ContainerItem>
      );
    case ClientState.FileClosed:
      return (
        <ContainerItem color={states.FileClosed.color}>
          {states.FileClosed.text}
        </ContainerItem>
      );
    case ClientState.CotationSigned:
      return (
        <ContainerItem color={states.CotationSigned.color}>
          {states.CotationSigned.text}
        </ContainerItem>
      );
    case ClientState.CotationValidated:
      return (
        <ContainerItem color={states.CotationValidated.color}>
          {states.CotationValidated.text}
        </ContainerItem>
      );
    case ClientState.TransactionSecured:
      return (
        <ContainerItem color={states.TransactionSecured.color}>
          {states.TransactionSecured.text}
        </ContainerItem>
      );

    default:
      return <ContainerItem color={"#ffffff"}>Not state</ContainerItem>;
  }
};

export default ClientDisplayStateTableList;

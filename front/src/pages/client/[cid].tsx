import { useRouter } from "next/router";
import ClientDisplayContact from "../../components/client/ClientDisplay/Contact";
import { Client as ClientType, useClientQuery } from "../../generated/graphql";
import React from "react";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/layout/MainContainer";
import { Grid } from "@material-ui/core";
import ClientDisplaySociete from "src/components/client/ClientDisplay/Societe";
import ClientDisplayDetails from "src/components/client/ClientDisplay/Details";
import ClientDisplayCoutier from "src/components/client/ClientDisplay/Coutier";
import ClientDisplayFichier from "src/components/client/ClientDisplay/Fichier";
import ClientDisplayDelete from "src/components/client/ClientDisplay/Delete";
import ClientDisplayState from "src/components/client/ClientDisplay/State";
import Progress from "src/components/layout/Progress";

const Client = () => {
  const {
    query: { cid },
  } = useRouter();
  const { data, loading, refetch } = useClientQuery({
    variables: { input: { id: cid as string } },
  });
  const client = data?.clients?.clients[0] as ClientType;
  const router = useRouter();

  return (
    <Layout>
      <MainContainer>
        {loading && <Progress title="Loading..."/>}
        {client && !loading && (
          <>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <ClientDisplaySociete client={client} />
                <br />
                <ClientDisplayContact client={client} />
                <br />
                <ClientDisplayFichier client={client} onChange={refetch} />
                <br />
                <ClientDisplayDetails client={client} />
                <br />
                <ClientDisplayCoutier client={client} />
                <br />
                <ClientDisplayDelete
                  client={client}
                  onChange={() => {
                    router.push(`/clients`);
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <ClientDisplayState client={client} />
              </Grid>
            </Grid>
          </>
        )}
      </MainContainer>
    </Layout>
  );
};

export default Client;

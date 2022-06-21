import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CreateClient from "../../components/client/CreateClient";
import {
  CreateClientInput,
  useCreateClientMutation,
  useClientsQuery,
} from "../../generated/graphql";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/layout/MainContainer";

const Client = () => {
  const router = useRouter();
  const [createClientMutation, { data, loading, error }] =
    useCreateClientMutation();
  const { refetch } = useClientsQuery();

  const createClient = async (client: CreateClientInput) =>
    await createClientMutation({ variables: { input: client } });

  const onCreateClient = async (createClientInput: CreateClientInput) => {
    await createClient(createClientInput);
    refetch();
  };

  useEffect(() => {
    if (data && !loading && !error) {
      router.push(`/client/${data?.createClient?.createdClient?.id}`);
    }
  });

  return (
    <Layout>
      <MainContainer>
        <CreateClient
          client={null}
          loading={loading}
          onChange={onCreateClient}
          onCancel={() => router.back()}
        />
      </MainContainer>
    </Layout>
  );
};

export default Client;

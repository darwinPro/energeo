import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useCreateUserMutation,
  useUsersQuery,
  CreateUserInput,
} from "../../generated/graphql";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/layout/MainContainer";
import CreateUser from "src/components/user/CreateUser";

const User = () => {
  const router = useRouter();
  const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
    errorPolicy: "all",
  });
  const { refetch } = useUsersQuery();

  const createUser = (client: CreateUserInput) =>
    createUserMutation({ variables: { input: client } });

  const onCreateClient = async (createUserInput: CreateUserInput) => {
    await createUser(createUserInput);
    refetch();
  };

  useEffect(() => {
    if (data && !loading && !error) {
      router.push(`/users/`);
    }
  });

  return (
    <Layout>
      <MainContainer>
        <CreateUser
          user={null}
          loading={loading}
          onChange={onCreateClient}
          onCancel={() => router.back()}
          messageError={error?.message || null}
        />
      </MainContainer>
    </Layout>
  );
};

export default User;

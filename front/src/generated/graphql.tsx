import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Client = {
  __typename?: 'Client';
  id: Scalars['String'];
  name: Scalars['String'];
  salesId?: Maybe<Scalars['String']>;
  sales?: Maybe<User>;
  address?: Maybe<Scalars['String']>;
  programmedVisitDate?: Maybe<Scalars['String']>;
  billType?: Maybe<Scalars['String']>;
  siret?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  validationDate?: Maybe<Scalars['String']>;
  contractStartDate?: Maybe<Scalars['String']>;
  contractEndDate?: Maybe<Scalars['String']>;
  paimentReceptionDate?: Maybe<Scalars['String']>;
  contact?: Maybe<ClientContact>;
  state?: Maybe<ClientState>;
  files?: Maybe<Array<File>>;
};

export type ClientContact = {
  __typename?: 'ClientContact';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
};

export enum ClientState {
  Initial = 'initial',
  AwaitingCotation = 'awaitingCotation',
  CotationReceived = 'cotationReceived',
  FileClosed = 'fileClosed',
  CotationSigned = 'cotationSigned',
  CotationValidated = 'cotationValidated',
  TransactionSecured = 'transactionSecured',
  Disabled = 'disabled'
}

export type ClientsInput = {
  id?: Maybe<Scalars['String']>;
};

export type ClientsReturn = {
  __typename?: 'ClientsReturn';
  clients?: Maybe<Array<Client>>;
};

export type CreateClientContactInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
};

export type CreateClientInput = {
  name: Scalars['String'];
  salesId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  programmedVisitDate?: Maybe<Scalars['String']>;
  billType?: Maybe<Scalars['String']>;
  siret?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  validationDate?: Maybe<Scalars['String']>;
  contractStartDate?: Maybe<Scalars['String']>;
  contractEndDate?: Maybe<Scalars['String']>;
  paimentReceptionDate?: Maybe<Scalars['String']>;
  contact?: Maybe<CreateClientContactInput>;
  state?: Maybe<ClientState>;
};

export type CreateClientReturn = {
  __typename?: 'CreateClientReturn';
  createdClient: Client;
};

export type CreateUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  role: UserRole;
  state?: Maybe<UserState>;
};

export type CreateUserReturn = {
  __typename?: 'CreateUserReturn';
  createdUser: User;
};

export type DeleteClientFileInput = {
  clientId: Scalars['String'];
  fileId: Scalars['String'];
};

export type DeleteClientFileOutput = {
  __typename?: 'DeleteClientFileOutput';
  deletedFileId: Scalars['String'];
};

export type DeleteClientInput = {
  id: Scalars['String'];
};

export type DeleteClientReturn = {
  __typename?: 'DeleteClientReturn';
  deletedClientId: Scalars['String'];
};

export type DeleteUserInput = {
  id: Scalars['String'];
};

export type DeleteUserReturn = {
  __typename?: 'DeleteUserReturn';
  deletedUserId: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  type: FileType;
  fileId: Scalars['String'];
  fileUrl: Scalars['String'];
  creationDate: Scalars['String'];
};

export enum FileType {
  Other = 'Other'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserReturn;
  updateUser: UpdateUserReturn;
  deleteUser: DeleteUserReturn;
  createClient: CreateClientReturn;
  updateClient: UpdateClientReturn;
  deleteClient: DeleteClientReturn;
  deleteClientFile: DeleteClientFileOutput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationDeleteClientArgs = {
  input: DeleteClientInput;
};


export type MutationDeleteClientFileArgs = {
  input: DeleteClientFileInput;
};

export type Query = {
  __typename?: 'Query';
  user: UserReturn;
  users: UsersReturn;
  clients: ClientsReturn;
};


export type QueryUserArgs = {
  token?: Maybe<Scalars['String']>;
};


export type QueryClientsArgs = {
  input?: Maybe<ClientsInput>;
};

export type UpdateClientContactInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
};

export type UpdateClientInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  salesId?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  programmedVisitDate?: Maybe<Scalars['String']>;
  billType?: Maybe<Scalars['String']>;
  siret?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  validationDate?: Maybe<Scalars['String']>;
  contractStartDate?: Maybe<Scalars['String']>;
  contractEndDate?: Maybe<Scalars['String']>;
  paimentReceptionDate?: Maybe<Scalars['String']>;
  contact?: Maybe<CreateClientContactInput>;
  state?: Maybe<ClientState>;
};

export type UpdateClientReturn = {
  __typename?: 'UpdateClientReturn';
  updatedClient: Client;
};

export type UpdateUserInput = {
  id: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  state?: Maybe<UserState>;
};

export type UpdateUserReturn = {
  __typename?: 'UpdateUserReturn';
  updatedUser: User;
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  googleId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<UserRole>;
  state?: Maybe<UserState>;
};

export type UserReturn = {
  __typename?: 'UserReturn';
  token: Scalars['String'];
  user: User;
};

export enum UserRole {
  Admin = 'admin',
  Assistant = 'assistant',
  Sales = 'sales'
}

export enum UserState {
  Enabled = 'enabled',
  Disabled = 'disabled'
}

export type UsersReturn = {
  __typename?: 'UsersReturn';
  users?: Maybe<Array<User>>;
};

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = (
  { __typename?: 'Query' }
  & { clients: (
    { __typename?: 'ClientsReturn' }
    & { clients?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'id' | 'name' | 'salesId' | 'address' | 'programmedVisitDate' | 'billType' | 'siret' | 'revenue' | 'validationDate' | 'contractStartDate' | 'contractEndDate' | 'paimentReceptionDate' | 'state'>
      & { sales?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'googleId' | 'firstName' | 'lastName' | 'email' | 'role'>
      )>, contact?: Maybe<(
        { __typename?: 'ClientContact' }
        & Pick<ClientContact, 'firstName' | 'lastName' | 'phone' | 'email' | 'birthDate'>
      )>, files?: Maybe<Array<(
        { __typename?: 'File' }
        & Pick<File, 'id' | 'name' | 'fileUrl'>
      )>> }
    )>> }
  ) }
);

export type ClientQueryVariables = Exact<{
  input?: Maybe<ClientsInput>;
}>;


export type ClientQuery = (
  { __typename?: 'Query' }
  & { clients: (
    { __typename?: 'ClientsReturn' }
    & { clients?: Maybe<Array<(
      { __typename?: 'Client' }
      & Pick<Client, 'id' | 'name' | 'salesId' | 'address' | 'programmedVisitDate' | 'billType' | 'siret' | 'revenue' | 'validationDate' | 'contractStartDate' | 'contractEndDate' | 'paimentReceptionDate' | 'state'>
      & { sales?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'googleId' | 'firstName' | 'lastName' | 'email' | 'role'>
      )>, contact?: Maybe<(
        { __typename?: 'ClientContact' }
        & Pick<ClientContact, 'firstName' | 'lastName' | 'phone' | 'email' | 'birthDate'>
      )>, files?: Maybe<Array<(
        { __typename?: 'File' }
        & Pick<File, 'id' | 'name' | 'fileUrl'>
      )>> }
    )>> }
  ) }
);

export type CreateClientMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClient: (
    { __typename?: 'CreateClientReturn' }
    & { createdClient: (
      { __typename?: 'Client' }
      & Pick<Client, 'id'>
    ) }
  ) }
);

export type UpdateClientMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientMutation = (
  { __typename?: 'Mutation' }
  & { updateClient: (
    { __typename?: 'UpdateClientReturn' }
    & { updatedClient: (
      { __typename?: 'Client' }
      & Pick<Client, 'id'>
    ) }
  ) }
);

export type DeleteFileMutationVariables = Exact<{
  input: DeleteClientFileInput;
}>;


export type DeleteFileMutation = (
  { __typename?: 'Mutation' }
  & { deleteClientFile: (
    { __typename?: 'DeleteClientFileOutput' }
    & Pick<DeleteClientFileOutput, 'deletedFileId'>
  ) }
);

export type UserQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'UserReturn' }
    & Pick<UserReturn, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'googleId' | 'firstName' | 'lastName' | 'email' | 'role' | 'state'>
    ) }
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UsersReturn' }
    & { users?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'googleId' | 'firstName' | 'lastName' | 'email' | 'role' | 'state'>
    )>> }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'CreateUserReturn' }
    & { createdUser: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'UpdateUserReturn' }
    & { updatedUser: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  ) }
);


export const ClientsDocument = gql`
    query Clients {
  clients {
    clients {
      id
      name
      salesId
      sales {
        id
        googleId
        firstName
        lastName
        email
        role
      }
      address
      programmedVisitDate
      billType
      siret
      revenue
      validationDate
      contractStartDate
      contractEndDate
      paimentReceptionDate
      contact {
        firstName
        lastName
        phone
        email
        birthDate
      }
      state
      files {
        id
        name
        fileUrl
      }
    }
  }
}
    `;

/**
 * __useClientsQuery__
 *
 * To run a query within a React component, call `useClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useClientsQuery(baseOptions?: Apollo.QueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, options);
      }
export function useClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, options);
        }
export type ClientsQueryHookResult = ReturnType<typeof useClientsQuery>;
export type ClientsLazyQueryHookResult = ReturnType<typeof useClientsLazyQuery>;
export type ClientsQueryResult = Apollo.QueryResult<ClientsQuery, ClientsQueryVariables>;
export const ClientDocument = gql`
    query Client($input: ClientsInput) {
  clients(input: $input) {
    clients {
      id
      name
      salesId
      sales {
        id
        googleId
        firstName
        lastName
        email
        role
      }
      address
      programmedVisitDate
      billType
      siret
      revenue
      validationDate
      contractStartDate
      contractEndDate
      paimentReceptionDate
      contact {
        firstName
        lastName
        phone
        email
        birthDate
      }
      state
      files {
        id
        name
        fileUrl
      }
    }
  }
}
    `;

/**
 * __useClientQuery__
 *
 * To run a query within a React component, call `useClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useClientQuery(baseOptions?: Apollo.QueryHookOptions<ClientQuery, ClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClientQuery, ClientQueryVariables>(ClientDocument, options);
      }
export function useClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClientQuery, ClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClientQuery, ClientQueryVariables>(ClientDocument, options);
        }
export type ClientQueryHookResult = ReturnType<typeof useClientQuery>;
export type ClientLazyQueryHookResult = ReturnType<typeof useClientLazyQuery>;
export type ClientQueryResult = Apollo.QueryResult<ClientQuery, ClientQueryVariables>;
export const CreateClientDocument = gql`
    mutation CreateClient($input: CreateClientInput!) {
  createClient(input: $input) {
    createdClient {
      id
    }
  }
}
    `;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, options);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const UpdateClientDocument = gql`
    mutation UpdateClient($input: UpdateClientInput!) {
  updateClient(input: $input) {
    updatedClient {
      id
    }
  }
}
    `;
export type UpdateClientMutationFn = Apollo.MutationFunction<UpdateClientMutation, UpdateClientMutationVariables>;

/**
 * __useUpdateClientMutation__
 *
 * To run a mutation, you first call `useUpdateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientMutation, { data, loading, error }] = useUpdateClientMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClientMutation, UpdateClientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClientMutation, UpdateClientMutationVariables>(UpdateClientDocument, options);
      }
export type UpdateClientMutationHookResult = ReturnType<typeof useUpdateClientMutation>;
export type UpdateClientMutationResult = Apollo.MutationResult<UpdateClientMutation>;
export type UpdateClientMutationOptions = Apollo.BaseMutationOptions<UpdateClientMutation, UpdateClientMutationVariables>;
export const DeleteFileDocument = gql`
    mutation DeleteFile($input: DeleteClientFileInput!) {
  deleteClientFile(input: $input) {
    deletedFileId
  }
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const UserDocument = gql`
    query User($token: String!) {
  user(token: $token) {
    token
    user {
      id
      googleId
      firstName
      lastName
      email
      role
      state
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    users {
      id
      googleId
      firstName
      lastName
      email
      role
      state
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    createdUser {
      id
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    updatedUser {
      id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CacheControlScope: CacheControlScope;
  Client: ResolverTypeWrapper<Client>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ClientContact: ResolverTypeWrapper<ClientContact>;
  ClientState: ClientState;
  ClientsInput: ClientsInput;
  ClientsReturn: ResolverTypeWrapper<ClientsReturn>;
  CreateClientContactInput: CreateClientContactInput;
  CreateClientInput: CreateClientInput;
  CreateClientReturn: ResolverTypeWrapper<CreateClientReturn>;
  CreateUserInput: CreateUserInput;
  CreateUserReturn: ResolverTypeWrapper<CreateUserReturn>;
  DeleteClientFileInput: DeleteClientFileInput;
  DeleteClientFileOutput: ResolverTypeWrapper<DeleteClientFileOutput>;
  DeleteClientInput: DeleteClientInput;
  DeleteClientReturn: ResolverTypeWrapper<DeleteClientReturn>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserReturn: ResolverTypeWrapper<DeleteUserReturn>;
  File: ResolverTypeWrapper<File>;
  FileType: FileType;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  UpdateClientContactInput: UpdateClientContactInput;
  UpdateClientInput: UpdateClientInput;
  UpdateClientReturn: ResolverTypeWrapper<UpdateClientReturn>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserReturn: ResolverTypeWrapper<UpdateUserReturn>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserReturn: ResolverTypeWrapper<UserReturn>;
  UserRole: UserRole;
  UserState: UserState;
  UsersReturn: ResolverTypeWrapper<UsersReturn>;
  AdditionalEntityFields: AdditionalEntityFields;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Client: Client;
  String: Scalars['String'];
  Float: Scalars['Float'];
  ClientContact: ClientContact;
  ClientsInput: ClientsInput;
  ClientsReturn: ClientsReturn;
  CreateClientContactInput: CreateClientContactInput;
  CreateClientInput: CreateClientInput;
  CreateClientReturn: CreateClientReturn;
  CreateUserInput: CreateUserInput;
  CreateUserReturn: CreateUserReturn;
  DeleteClientFileInput: DeleteClientFileInput;
  DeleteClientFileOutput: DeleteClientFileOutput;
  DeleteClientInput: DeleteClientInput;
  DeleteClientReturn: DeleteClientReturn;
  DeleteUserInput: DeleteUserInput;
  DeleteUserReturn: DeleteUserReturn;
  File: File;
  Mutation: {};
  Query: {};
  UpdateClientContactInput: UpdateClientContactInput;
  UpdateClientInput: UpdateClientInput;
  UpdateClientReturn: UpdateClientReturn;
  UpdateUserInput: UpdateUserInput;
  UpdateUserReturn: UpdateUserReturn;
  Upload: Scalars['Upload'];
  User: User;
  UserReturn: UserReturn;
  UsersReturn: UsersReturn;
  AdditionalEntityFields: AdditionalEntityFields;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
};

export type AuthDirectiveArgs = {  };

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RoleDirectiveArgs = {   roles?: Maybe<Array<UserRole>>; };

export type RoleDirectiveResolver<Result, Parent, ContextType = any, Args = RoleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UnionDirectiveArgs = {   discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {   discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {   embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>; };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {   overrideType?: Maybe<Scalars['String']>; };

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {  };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {   path: Scalars['String']; };

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  salesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sales?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  programmedVisitDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revenue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  validationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contractStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contractEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paimentReceptionDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['ClientContact']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['ClientState']>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['File']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContact'] = ResolversParentTypes['ClientContact']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientsReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientsReturn'] = ResolversParentTypes['ClientsReturn']> = {
  clients?: Resolver<Maybe<Array<ResolversTypes['Client']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClientReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateClientReturn'] = ResolversParentTypes['CreateClientReturn']> = {
  createdClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserReturn'] = ResolversParentTypes['CreateUserReturn']> = {
  createdUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteClientFileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteClientFileOutput'] = ResolversParentTypes['DeleteClientFileOutput']> = {
  deletedFileId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteClientReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteClientReturn'] = ResolversParentTypes['DeleteClientReturn']> = {
  deletedClientId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserReturn'] = ResolversParentTypes['DeleteUserReturn']> = {
  deletedUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FileType'], ParentType, ContextType>;
  fileId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['CreateUserReturn'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['UpdateUserReturn'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  deleteUser?: Resolver<ResolversTypes['DeleteUserReturn'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  createClient?: Resolver<ResolversTypes['CreateClientReturn'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  updateClient?: Resolver<ResolversTypes['UpdateClientReturn'], ParentType, ContextType, RequireFields<MutationUpdateClientArgs, 'input'>>;
  deleteClient?: Resolver<ResolversTypes['DeleteClientReturn'], ParentType, ContextType, RequireFields<MutationDeleteClientArgs, 'input'>>;
  deleteClientFile?: Resolver<ResolversTypes['DeleteClientFileOutput'], ParentType, ContextType, RequireFields<MutationDeleteClientFileArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<ResolversTypes['UserReturn'], ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  users?: Resolver<ResolversTypes['UsersReturn'], ParentType, ContextType>;
  clients?: Resolver<ResolversTypes['ClientsReturn'], ParentType, ContextType, RequireFields<QueryClientsArgs, never>>;
};

export type UpdateClientReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateClientReturn'] = ResolversParentTypes['UpdateClientReturn']> = {
  updatedClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserReturn'] = ResolversParentTypes['UpdateUserReturn']> = {
  updatedUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['UserState']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserReturn'] = ResolversParentTypes['UserReturn']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersReturnResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersReturn'] = ResolversParentTypes['UsersReturn']> = {
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Client?: ClientResolvers<ContextType>;
  ClientContact?: ClientContactResolvers<ContextType>;
  ClientsReturn?: ClientsReturnResolvers<ContextType>;
  CreateClientReturn?: CreateClientReturnResolvers<ContextType>;
  CreateUserReturn?: CreateUserReturnResolvers<ContextType>;
  DeleteClientFileOutput?: DeleteClientFileOutputResolvers<ContextType>;
  DeleteClientReturn?: DeleteClientReturnResolvers<ContextType>;
  DeleteUserReturn?: DeleteUserReturnResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateClientReturn?: UpdateClientReturnResolvers<ContextType>;
  UpdateUserReturn?: UpdateUserReturnResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserReturn?: UserReturnResolvers<ContextType>;
  UsersReturn?: UsersReturnResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
  role?: RoleDirectiveResolver<any, any, ContextType>;
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';
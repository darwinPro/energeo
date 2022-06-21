import { createContext, useContext, useState, useEffect } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { setToken as setApolloToken } from "../apollo";
import { googleClientId } from "../env";
import { User, useUserLazyQuery } from "../../generated/graphql";

const clientId = googleClientId;

type UserContext = {
  loaded: boolean;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
  token?: string;
  user?: User;
  login: () => void;
  logout: () => void;
};

const UserContext = createContext<UserContext>({} as any);

export const UserProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [googleToken, setGoogleToken] = useState(null);
  const [globalError, setGlobalError] = useState(null);
  const [getUser, { data, loading, error }] = useUserLazyQuery({
    fetchPolicy: "network-only",
  });
  const user = data?.user?.user;
  const token = data?.user?.token;

  const { signIn, loaded: signInLoaded } = useGoogleLogin({
    clientId,
    onSuccess: (res: any) => {
      const token = res.tokenId;
      setGoogleToken(token);
      setGlobalError(null);
      setLoaded(false);
      getUser({ variables: { token } });
    },
    onFailure: (res) => {
      setGlobalError(res);
      setLoaded(true);
    },
    isSignedIn: true,
  });
  const { signOut, loaded: logoutLoaded } = useGoogleLogout({
    clientId,
    onLogoutSuccess: () => {
      setIsAuthenticated(false);
      setGoogleToken(null);
      setGlobalError(null);
      setLoaded(true);
    },
    onFailure: () => setGlobalError(true),
  });

  useEffect(() => {
    setApolloToken(token);
  }, [token]);

  useEffect(() => {
    setGlobalError(error);
  }, [error]);

  useEffect(() => {
    if (user && !loading && !error) {
      setIsAuthenticated(true);
      setLoaded(true);
    }
  }, [user, loading, error]);

  const value = {
    loaded,
    isAuthenticated,
    loading: !signInLoaded || !logoutLoaded || loading,
    token,
    googleToken,
    error: globalError,
    user,
    login: signIn,
    logout: signOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export default useUser;

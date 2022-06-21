import { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";
import useUser from "./useUser";

type Options = {
  redirectAuthenticatedTo?: string;
  redirectNotAuthenticatedTo?: string;
  renderIfAuthenticated?: JSX.Element;
  renderIfNotAuthenticated?: JSX.Element;
  renderIfLoading?: JSX.Element;
};

const Cmp = ({
  ComponentToRender,
  options,
}: {
  options?: Options;
  ComponentToRender;
}): JSX.Element => {
  const router = useRouter();
  const { isAuthenticated, loaded } = useUser();

  useEffect(() => {
    if (loaded) {
      if (isAuthenticated && options.redirectAuthenticatedTo)
        router.push(options.redirectAuthenticatedTo);
      if (!isAuthenticated && options.redirectNotAuthenticatedTo)
        router.push(options.redirectNotAuthenticatedTo);
    }
  }, [isAuthenticated, loaded]);

  if (!loaded && options.renderIfLoading) return options.renderIfLoading;
  else {
    if (isAuthenticated && options.renderIfAuthenticated)
      return options.renderIfAuthenticated;
    if (!isAuthenticated && options.renderIfNotAuthenticated)
      return options.renderIfNotAuthenticated;
  }

  return <ComponentToRender />;
};

const redirect = (ComponentToRender: FunctionComponent, options?: Options) => {
  return (props) => (
    <Cmp ComponentToRender={ComponentToRender} options={options} {...props} />
  );
};

export default redirect;

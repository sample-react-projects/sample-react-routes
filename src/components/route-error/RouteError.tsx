import { useRouteError } from "react-router-dom";

const RouteError: React.FC<{}> = () => {
  const routeError = useRouteError() as Response;
  let errorMessage = "Looks like there was an error.";

  if (routeError.status === 404) {
    errorMessage = "Could not find the resource you are looking for";
  }
  return <>{errorMessage}</>;
};

export default RouteError;

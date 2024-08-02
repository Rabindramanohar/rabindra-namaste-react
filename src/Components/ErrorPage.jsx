import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-container">
      <h1>OPPs!!</h1>
      <h2>Something went wrong!!</h2>
      {error.statusText}
    </div>
  );
};

export default ErrorPage;

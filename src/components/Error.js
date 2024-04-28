import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="m-8 border-2 border-gray-700 rounded-xl p-2">
      <h1>Oops....!</h1>
      <h2>Something went wrong.</h2>
      <h3 className="text-2xl font-semibold">
        {err.status + "  " + err.statusText}{" "}
      </h3>
    </div>
  );
};

export default Error;

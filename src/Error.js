import { useRouteError } from "react-router-dom"; //Handle error in React-router

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!</h1>
      <h2>Something went wrong</h2>
    </div>
  );
};

export default Error;

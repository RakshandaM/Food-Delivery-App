import { useRouteError } from "react-router-dom";  //Handle error in React-router


const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Opps!!</h1>
            <h2>Something went wrong</h2>
            {err ? (
                <pre>{JSON.stringify(err, null, 2)}</pre>
            ) : (
                <p>No error message available</p>
            )}
        </div>
    );
};

export default Error;
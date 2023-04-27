import { FC } from "react";
import ErrorBlock from "../components/ErrorBlock/ErrorBlock";

const ErrorPage:FC = () => {
    return ( 
        <div>
            <h1>404</h1>
            <ErrorBlock></ErrorBlock>
        </div>
     );
}
 
export default ErrorPage;
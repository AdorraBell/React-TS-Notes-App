import { FC } from "react";
import ErrorBlock from "../components/ErrorBlock/ErrorBlock";
import MainTitle from "../components/UI/mainTitle/MainTitle";

const ErrorPage:FC = () => {
    return ( 
        <>
            <MainTitle>404</MainTitle>
            <ErrorBlock />
        </>
     );
}
 
export default ErrorPage;
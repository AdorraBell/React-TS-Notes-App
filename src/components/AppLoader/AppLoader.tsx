import { FC } from "react";
import styles from "./AppLoader.module.css";

const AppLoader:FC = () => {
    return ( 
        <div className = {styles.appLoaderWrapper}>
            <div className = {styles.appLoader}></div>
        </div>
    );
}
 
export default AppLoader;
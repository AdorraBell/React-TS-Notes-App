import { FC } from "react";
import styles from "./MainTitle.module.css";

interface MainTitleProps {
    children: string
}

const MainTitle:FC<MainTitleProps> = ({children}) => {
    return ( 
        <h1 className={styles.h1Title}>
            {children}
        </h1>
    );
}
 
export default MainTitle;

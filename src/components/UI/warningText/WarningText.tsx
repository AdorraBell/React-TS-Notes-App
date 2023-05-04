import styles from "./WarningText.module.css";
import { FC } from "react";

interface WarningTextProps {
    children: React.ReactNode
}

const WarningText:FC<WarningTextProps> = ({children}) => {
    return ( 
        <p className = {styles.warningText}>
            {children}
        </p>
     );
}
 
export default WarningText;
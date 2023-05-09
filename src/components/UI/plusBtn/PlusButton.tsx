import { FC } from "react";
import styles from "./PlusButton.module.css";

const PlusButton:FC = () => {
    return ( 
        <div className={styles.addNote}>
            +
        </div>
     );
}
 
export default PlusButton;
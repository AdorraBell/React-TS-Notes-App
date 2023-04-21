import { FC } from "react";
import styles from "./PlusButton.module.css";

interface PlusButtonProps{
    onClick?: () => void
}

const PlusButton:FC<PlusButtonProps> = ({onClick}) => {
    return ( 
        <div className = {styles.addNote}>+</div>
     );
}
 
export default PlusButton;
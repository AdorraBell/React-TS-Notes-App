import { FC } from "react";
import styles from "./AppButton.module.css";

type BtnClassVariants = 'orangeButton' | 'greyOutlineButton';

type ButtonTypes = 'button' | 'submit';

interface AppButtonProps {
    value?: string,
    type: ButtonTypes,
    children: string,
    variant: BtnClassVariants
}

const AppButton:FC<AppButtonProps> = ({value, type, children, variant}) => {

    const btnClass = variant === 'orangeButton' ? styles.orangeButton : styles.greyOutlineButton
    const btnClasses =  styles.btnDefault + ' ' + btnClass;

    return ( 
        <button 
            type = {type} 
            className = {btnClasses}>
            {children}
        </button>
    );
}
 
export default AppButton;
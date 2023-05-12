import { FC, useEffect, useState } from "react";
import styles from "./AppButton.module.css";

type BtnClassVariants = 'orangeButton' | 'greyOutlineButton' | 'tealOutlineButton';

type ButtonTypes = 'button' | 'submit';

interface AppButtonProps {
    type: ButtonTypes,
    children: string,
    variant: BtnClassVariants
}

const AppButton:FC<AppButtonProps> = ({type, children, variant}) => {

    const [btnClass, setBtnClass] = useState('');
    const btnClasses =  styles.btnDefault + ' ' + btnClass;

    const btnSelectClass = (variant: string) => {
        switch(variant){
            case 'orangeButton': setBtnClass(styles.orangeButton);
            break;
            case 'greyOutlineButton': setBtnClass(styles.greyOutlineButton);
            break;
            case 'tealOutlineButton': setBtnClass(styles.tealOutlineButton);
            break;
            default: setBtnClass(styles.greyOutlineButton);
        }
    }

    useEffect(() => {
        btnSelectClass(variant);
    }, [])

    return ( 
        <button 
            type={type} 
            className={btnClasses}>
            {children}
        </button>
    );
}
 
export default AppButton;
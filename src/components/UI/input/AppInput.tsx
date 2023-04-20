import { FC } from "react";
import styles from "./AppInput.module.css";

interface AppInputProps{
    value?: string,
    title?: string,
    changeInputVal: (e: string) => void,
    maxWidth?: string,
}


const AppInput:FC<AppInputProps> = ({value, changeInputVal, title, maxWidth}) => {
    

    return ( 
        <div className = {styles.appInputWrapper} style = {{maxWidth: maxWidth}}>
            {title &&
                <h3 className = {styles.appInputTitle}>{title}</h3>
            }
            <input 
                defaultValue = {value}
                className = {styles.appInput} 
                onChange = {(e) => changeInputVal(e.target.value)}>
            </input>
        </div>
     );
}
 
export default AppInput;
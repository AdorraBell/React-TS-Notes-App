import { FC } from "react";
import styles from "./AppTextarea.module.css";

interface AppTextareaProps{
    defaultValue?: string,
    changeTextarea: (e: string) => void,
    maxWidth?: string,
    title?: string,
}

const AppTextarea:FC<AppTextareaProps> = ({changeTextarea, maxWidth, title, defaultValue}) => {

    return ( 
        <div className = {styles.appTextareaWrapper} style = {{maxWidth: maxWidth}}>
            {title &&
                <h3 className = {styles.appTextareaTitle}>{title}</h3>
            }
            <textarea 
                defaultValue = {defaultValue}
                onChange = {(e) => changeTextarea(e.target.value)} 
                className = {styles.appTextarea}
                ></textarea>
        </div>
    );
}
 
export default AppTextarea;
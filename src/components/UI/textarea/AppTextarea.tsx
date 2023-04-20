import { FC } from "react";
import styles from "./AppTextarea.module.css";

interface AppTextareaProps{
    changeTextarea: (e: string) => void,
    maxWidth?: string,
    title?: string,
}

const AppTextarea:FC<AppTextareaProps> = ({changeTextarea, maxWidth, title}) => {
    return ( 
        <div className = {styles.appTextareaWrapper} style = {{width: maxWidth}}>
            {title &&
                <h3 className = {styles.appTextareaTitle}>{title}</h3>
            }
            <textarea onChange = {(e) => changeTextarea(e.target.value)} className = {styles.appTextarea}></textarea>
        </div>
    );
}
 
export default AppTextarea;
import { FC } from "react";
import styles from "./AppTextarea.module.css";

interface AppTextareaProps{
    defaultValue?: string,
    changeTextarea: (e: string) => void,
    maxWidth?: string,
    title?: string,
}

const AppTextarea:FC<AppTextareaProps> = ({changeTextarea, maxWidth, title, defaultValue}) => {

    const teatareaHasBeenChanged = (e: React.FormEvent<HTMLTextAreaElement>) => {
        changeTextarea(e.currentTarget.value);
    }

    return ( 
        <div 
            className={styles.appTextareaWrapper} 
            style={{maxWidth: maxWidth}}>
            {title &&
                <h3 className={styles.appTextareaTitle}>
                    {title}
                </h3>
            }
            <textarea 
                defaultValue={defaultValue}
                onChange={teatareaHasBeenChanged} 
                className={styles.appTextarea}
                ></textarea>
        </div>
    );
}
 
export default AppTextarea;
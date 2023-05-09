import { FC } from "react";
import { NoteType } from "../../types/types";
import { Link } from "react-router-dom";
import styles from "./NoteDetail.module.css";
import AppButton from "../UI/button/AppButton";
import { textFormatting } from "../../helpers/textFormatting";
import { createHTML } from "../../helpers/createHTML";



const NoteDetail:FC<NoteType> = ({body, title, tags, id}) => {

    let formattedBody = textFormatting(body);

    return ( 
        <div className={styles.noteDetail}>
            <h1 className="h1-title">{title}</h1>
            <div className={styles.noteDetail__tags}>
               {tags &&
                (tags).map(tag =>
                    <div className={styles.noteDetail__tag} 
                        key={tag.id}>#{tag.label}</div>
                )}
            </div>
            <div className={styles.noteDetail__body}>
                <div dangerouslySetInnerHTML={createHTML(formattedBody)} />
            </div>
            <div className={styles.noteDetail__btns}>
                <Link to=".." className="grey-btn">
                    <AppButton 
                        type={'button'} 
                        variant={'greyOutlineButton'}>
                        Go Back
                    </AppButton>
                </Link>
                <Link to={`/${id}/edit`}>
                    <AppButton 
                        type={'button'} 
                        variant={'orangeButton'}>
                        Edit
                    </AppButton>
                </Link>
            </div>
        </div>
     );
}
 
export default NoteDetail;
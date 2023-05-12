import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NoteBlock.module.css";
import { textFormatting } from "../../../helpers/textFormatting";
import { createHTML } from "../../../helpers/createHTML";
import { NoteBlockType } from "../../../types/types";

const NoteBlock:FC<NoteBlockType> = ({id, title, body, tags, deletePoint, canBeDeleted}) => {

    const formattedBody = textFormatting(body);
    const showDeleteCircle = canBeDeleted === undefined ? true : false;

    return ( 
        <div className={styles.noteBlock}>
            {showDeleteCircle &&
                <div 
                    className={styles.deleteCircleWrapper}  
                    onClick={() => deletePoint && deletePoint(id)}>
                    <div className={styles.deleteCircle}>
                        <span className={styles.deleteCircle__line}></span>
                        <span className={styles.deleteCircle__line}></span>
                    </div>
                </div>
            }
            <Link 
                to={`/${id}/detail`} 
                className={styles.noteBlock__link}>
                <h3 className={styles.noteBlock__title}>
                    {title}
                </h3>
                {tags &&
                    <div className={styles.noteBlock__tags}>
                        {tags.map(tag =>
                            <span key={tag.id}> #{tag.label} </span>
                        )}
                    </div>
                }
                <div className={styles.noteBlock__body}>
                    <div dangerouslySetInnerHTML={createHTML(formattedBody)} />
                </div>
                <div className={styles.noteBlock__readMore}>
                    Read more
                </div>
            </Link>
        </div>
    );
}
 
export default NoteBlock;
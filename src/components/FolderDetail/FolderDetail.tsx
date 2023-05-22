import { FC, useState } from "react";
import { FolderType, NoteType } from "../../types/types";
import NotesList from "../NotesList/NotesList";
import styles from "./FilderDetail.module.css";
import MainTitle from "../UI/mainTitle/MainTitle";

interface FolderDetailProps{
    folder: FolderType;
}

const FolderDetail:FC<FolderDetailProps> = ({folder}) => {

    const tags = folder.tags;
    const notesId = folder.notes;
    const fullNotesList = useState(JSON.parse(localStorage.getItem('notesList') || '[]'));
    const currentNotes: Array<NoteType> = [];
   
    notesId?.forEach(note => {
        for(let i = 0; i < fullNotesList[0].length; i ++){
            if(note.id === fullNotesList[0][i].id) currentNotes.push(fullNotesList[0][i]);
        } 
    });

    return ( 
        <div>
            <MainTitle>{folder.title}</MainTitle>
            <div className={styles.mainBlock}>
                {tags &&
                    <div className={styles.tagsWrapper}>
                        <span className={styles.tagsTitle}>Folder tags: </span>
                        <div className={styles.tagsBlock}>
                            {tags.map(tag => 
                                <div key={tag.id} className={styles.tag}>
                                    #{tag.label}
                                </div>
                            )}
                        </div>
                    </div>
                }   
                {currentNotes &&
                    <NotesList
                        notesList={currentNotes}
                        canBeDeleted={false}
                        />
                }      
            </div>   
        </div>
    );
}
 
export default FolderDetail;
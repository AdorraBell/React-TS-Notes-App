import { FC, useEffect, useState } from "react";
import { FolderType, NoteType } from "../../types/types";
import AppLoader from "../AppLoader/AppLoader";
import NotesList from "../NotesList/NotesList";
import styles from "./FilderDetail.module.css";

interface FolderDetailProps{
    folder: FolderType;
}

const FolderDetail:FC<FolderDetailProps> = ({folder}) => {

    let tags = folder.tags;
    let notesId = folder.notes;
    let fullNotesList = useState(JSON.parse(localStorage.getItem('notesList') || '[]'));
    let currentNotes: Array<NoteType> = [];


   
    notesId?.forEach(note => {
        for(let i = 0; i < fullNotesList[0].length; i ++){
            if(note.id === fullNotesList[0][i].id) currentNotes.push(fullNotesList[0][i]);
        } 
    });
    
        
   
    

    const deleteNote = (id: number) => {
        // let newNotesArr: Array<NoteType> = [];
        // console.log(newNotesArr);
        // currentNotes.forEach((note: NoteType) => {
        //     if(note.id !== id) newNotesArr.push(note);
        // })

        
        // setCurrentNotes([]);
        // console.log(currentNotes);
    }

    return ( 
        <div>
            <h1 className = "h1-title">{folder.title}</h1>
            <div className = {styles.mainBlock}>
                {tags &&
                    <div className = {styles.tagsWrapper}>
                        <span className = {styles.tagsTitle}>Folder tags: </span>
                        <div className = {styles.tagsBlock}>
                            {tags.map(tag => 
                                <div key = {tag.id} className = {styles.tag}>
                                    #{tag.label}
                                </div>
                            )}
                        </div>
                    </div>
                }   
                {currentNotes &&
                    <NotesList
                        notesList={currentNotes}
                        deletePoint={(id) => deleteNote(id)}
                        canBeDeleted = {false}
                        ></NotesList>
                }      
            </div>   
        </div>
    );
}
 
export default FolderDetail;
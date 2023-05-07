import { FC } from "react";
import styles from "./NotesList.module.css";
import NoteBlock from "../UI/noteBlock/NoteBlock";
import { NoteType } from "../../types/types";

interface NotesListProps{
    notesList: Array<NoteType>,
    deletePoint?: (id: number) => void,
    canBeDeleted?: boolean
}

const NotesList:FC<NotesListProps> = ({notesList, deletePoint, canBeDeleted}) => {

    return (    
        <div className = {styles.notesList}>
            {notesList.map(note =>
                <NoteBlock 
                    id = {note.id} 
                    title = {note.title} 
                    body = {note.body}
                    tags = {note.tags}
                    deletePoint = {(id) => deletePoint && deletePoint(id)}
                    key = {note.id}
                    canBeDeleted = {canBeDeleted}></NoteBlock>
            )} 
        </div>
     );
}
 
export default NotesList;
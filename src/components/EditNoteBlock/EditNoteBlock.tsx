import AppForm from "../../components/AppForm/AppForm";
import { FC } from "react";
import { changePoint, takePointById } from "../../localStorage";
import { NoteType } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface EditNoteBlockProps{
    id: number
}

const EditNoteBlock:FC<EditNoteBlockProps> = ({id}) => {

    const selectedNote = takePointById(id, 'notesList');
    const navigate = useNavigate();

    const returnNote = (note: NoteType) => {
        changePoint(note, 'notesList');
        return navigate('/');
    }

    return ( 
        <div>
            <AppForm
                selectedTagsList = {selectedNote.tags}
                returnNote = {(note) => returnNote(note)}
                defaultTitle = {selectedNote.title}
                defaultBody = {selectedNote.body}
                defaultId = {id}
            ></AppForm>
        </div>
     );
}
 
export default EditNoteBlock;
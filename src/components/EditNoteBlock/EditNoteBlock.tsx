import AppForm from "../../components/AppForm/AppForm";
import { FC } from "react";
import { changePoint, takePointById } from "../../localStorage";
import { NoteType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import useUpdatedList from "../../hooks/useMainInfoList";

interface EditNoteBlockProps{
    id: number
}

const EditNoteBlock:FC<EditNoteBlockProps> = ({id}) => {

    const selectedNote = takePointById(id, 'notesList');
    const navigate = useNavigate();
    const updateData = useUpdatedList();   

    const returnNote = (note: NoteType) => {
        changePoint(note, 'notesList');
        updateData.update('notesList');
        return navigate('/');
    }

    return ( 
        <div>
            <AppForm
                selectedTagsList={selectedNote.tags}
                returnNote={returnNote}
                defaultTitle={selectedNote.title}
                defaultBody={selectedNote.body}
                defaultId={id}
            />
        </div>
     );
}
 
export default EditNoteBlock;
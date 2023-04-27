import AppForm from "../../components/AppForm/AppForm";
import { FC, useState } from "react";
import { changePoint, takePointById } from "../../localStorage";
import { NoteType, TagType } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface EditNoteBlockProps{
    id: number
}

const EditNoteBlock:FC<EditNoteBlockProps> = ({id}) => {

    let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');
    const selectedNote = takePointById(id, 'notesList');
    let [selectedTags, setSelectedTags]: any = useState(selectedNote.tags);
    let [noteTitle, setNoteTitle] = useState(selectedNote.title);
    let [noteBody, setNoteBody] = useState(selectedNote.body);
    const navigate = useNavigate();

    const addTag = (tag: TagType) => {
        setSelectedTags([...selectedTags, tag]);
    }

    const deleteTag = (index: number) => {
        setSelectedTags(selectedTags.filter((tag: TagType, i: number) => {
            if(index !== i) return tag;
        }))
    }
    
    const deleteAllSelectedTags = () => {
        setSelectedTags([]);
    }

    const returnNote = (note: NoteType) => {
        changePoint(note, 'notesList');
        return navigate('/');
    }

    return ( 
        <div>
            <AppForm
                allTags = {allTags}
                selectedTags = {selectedTags}
                addTag = {(tag) => addTag(tag)}
                deleteTag = {(index) => deleteTag(index)}
                deleteAllSelectedTags = {deleteAllSelectedTags}
                returnNote = {(note) => returnNote(note)}
                defaultTitle = {noteTitle}
                defaultBody = {noteBody}
                defaultId = {id}
            ></AppForm>
        </div>
     );
}
 
export default EditNoteBlock;
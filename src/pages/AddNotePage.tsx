import { FC } from "react";
import AppForm from "../components/AppForm/AppForm";
import {useState} from "react";
import { TagType } from "../types/types";
import {NoteType} from "../types/types";
import { addNoteToNotesList } from "../localStorage";
import { useNavigate } from "react-router-dom";


const AddNotePage:FC = () => {

    //let [selectedTags, setSelectedTags] = useState([{label: 'EU', id: 'EU'}, {label: 'USA', id: 'USA'}, {label: 'KGZ', id: 'KGZ'}]);
    let [selectedTags, setSelectedTags] = useState([{label: 'example', id: 'example'}]);
    let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');
    
    const navigate = useNavigate();

    const addTag = (data: TagType) => {
        setSelectedTags([...selectedTags, data]);
    }

    const deleteTag = (index: number) => {
        setSelectedTags(selectedTags.filter((tag, i) => {
            if(index !== i) return tag;
        }));
    }

    const deleteAllSelectedTags = () => {
        setSelectedTags([]);
    }

    const saveNote = (data: NoteType) => {
        addNoteToNotesList(data);
        return navigate('/');
    }

    return ( 
        <div>
            <h1 className = "h1-title">Create New Note</h1>
            <AppForm 
                selectedTags = {selectedTags} 
                allTags = {allTags} 
                addTag = {(data) => addTag(data)}
                deleteTag = {(index) => deleteTag(index)}
                deleteAllSelectedTags = {() => deleteAllSelectedTags()}
                returnNote = {(data) => saveNote(data)}></AppForm>
        </div>
     );
}
 
export default AddNotePage;
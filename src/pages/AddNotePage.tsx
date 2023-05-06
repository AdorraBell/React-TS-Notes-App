import { FC } from "react";
import AppForm from "../components/AppForm/AppForm";
import {useState} from "react";
import {NoteType} from "../types/types";
import { addPointToList } from "../localStorage";
import { useNavigate } from "react-router-dom";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";
import useUpdatedList from "../hooks/useUpdatedList";

const AddNotePage:FC = () => {

    const [selectedTags, setSelectedTags] = useState([{label: 'example', id: 'example'}]);
    const navigate = useNavigate();
    const updateData = useUpdatedList();  

    const saveNote = (data: NoteType) => {
        addPointToList(data, 'notesList');
        updateData.update('notesList');
        return navigate('/');
    }

    return ( 
        <PagesWthFormLayout
            title = "Create New Note">
            <AppForm 
                selectedTagsList = {selectedTags} 
                returnNote = {(data) => saveNote(data)}></AppForm>
        </PagesWthFormLayout>
     );
}
 
export default AddNotePage;
import { FC } from "react";
import AppForm from "../components/AppForm/AppForm";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";
import { useDataFromForm } from "../hooks/useDataFromForm";
import { NoteType } from "../types/types";

const AddNotePage:FC = () => {

    const dataFromForm = useDataFromForm();

    const saveNote = (data: NoteType) => dataFromForm.saveData(data, 'notesList', '/');

    return ( 
        <PagesWthFormLayout
            title="Create New Note">
            <AppForm 
                returnNote={saveNote}
                />
        </PagesWthFormLayout>
     );
}
 
export default AddNotePage;
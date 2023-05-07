import { FC } from "react";
import AppForm from "../components/AppForm/AppForm";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";
import { useDataFromForm } from "../hooks/useDataFromForm";

const AddNotePage:FC = () => {

    const dataFromForm = useDataFromForm();

    return ( 
        <PagesWthFormLayout
            title = "Create New Note">
            <AppForm 
                returnNote = {(data) => dataFromForm.saveData(data, 'notesList', '/')}
                ></AppForm>
        </PagesWthFormLayout>
     );
}
 
export default AddNotePage;
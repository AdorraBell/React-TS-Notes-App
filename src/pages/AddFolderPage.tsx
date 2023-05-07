import { FC } from "react";
import FolderForm from "../components/FolderForm/FolderForm";
import { TagType } from "../types/types";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";
import { useDataFromForm } from "../hooks/useDataFromForm";

const AddFolderPage:FC = () => {

    const selectedNotesList: Array<TagType> = [];
    const dataFromForm = useDataFromForm();

    return (  
        <PagesWthFormLayout
            title = "Add Folder">
            <FolderForm
                selectedNotesList = {selectedNotesList}
                saveFolder = {(data) => dataFromForm.saveData(data, 'foldersList', '/folders')}
                ></FolderForm>
        </PagesWthFormLayout>  
    );
}
 
export default AddFolderPage;
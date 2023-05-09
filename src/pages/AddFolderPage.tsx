import { FC } from "react";
import FolderForm from "../components/FolderForm/FolderForm";
import { FolderType, TagType } from "../types/types";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";
import { useDataFromForm } from "../hooks/useDataFromForm";

const AddFolderPage:FC = () => {

    const selectedNotesList: Array<TagType> = [];
    const dataFromForm = useDataFromForm();
    
    const saveFolder = (data: FolderType) => dataFromForm.saveData(data, 'foldersList', '/folders');
    
    return (  
        <PagesWthFormLayout
            title="Add Folder">
            <FolderForm
                selectedNotesList={selectedNotesList}
                returnFolder={saveFolder}
                />
        </PagesWthFormLayout>  
    );
}
 
export default AddFolderPage;
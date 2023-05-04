import { FC } from "react";
import FolderForm from "../components/FolderForm/FolderForm";
import { FolderType } from "../types/types";
import { useNavigate } from "react-router-dom";
import { addPointToList } from "../localStorage";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";


const AddFolderPage:FC = () => {

    let selectedTagsList = [{label: 'example', id: 'example'}];
    let selectedNotesList: any = [];
    const navigate = useNavigate();
    
    const saveFolder = (folder: FolderType) => {
        addPointToList(folder, 'foldersList');
        return navigate('/folders');
    }

    return (  
        <PagesWthFormLayout
            title = "Add Folder">
            <FolderForm
                selectedTagsList = {selectedTagsList}
                selectedNotesList = {selectedNotesList}
                saveFolder = {(folder) => saveFolder(folder)}
                ></FolderForm>
        </PagesWthFormLayout>  
    );
}
 
export default AddFolderPage;
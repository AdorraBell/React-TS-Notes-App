import { FC } from "react";
import FolderForm from "../components/FolderForm/FolderForm";
import { FolderType, NoteType, TagType } from "../types/types";
import { useNavigate } from "react-router-dom";
import { addPointToList } from "../localStorage";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";
import useUpdatedList from "../hooks/useUpdatedList";

const AddFolderPage:FC = () => {

    let selectedTagsList = [{label: 'example', id: 'example'}];
    let selectedNotesList: Array<TagType> = [];
    const navigate = useNavigate();
    const updateData = useUpdatedList(); 
    
    const saveFolder = (folder: FolderType) => {
        addPointToList(folder, 'foldersList');
        updateData.update('foldersList');
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
import { FC } from "react";
import { changePoint, takePointById } from "../../localStorage";
import FolderForm from "../FolderForm/FolderForm";
import { FolderType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import  useUpdatedList  from "../../hooks/useMainInfoList";

interface EditFolderBlockProps{
    id: number
}

const EditFolderBlock:FC<EditFolderBlockProps> = ({id}) => {

    const curFolder = takePointById(id, 'foldersList');
    const navigate = useNavigate();
    const updateData = useUpdatedList();

    const saveFolder = (val: FolderType) => {
        changePoint(val, 'foldersList');
        updateData.update('foldersList');
        return navigate('/folders');
    }

    return ( 
        <div>
            <FolderForm
                returnFolder={saveFolder}
                defaultId={id}
                defaultTitle={curFolder.title}
                selectedNotesList={curFolder.notes}
                selectedTagsList={curFolder.tags}></FolderForm>
        </div>
    );
}
 
export default EditFolderBlock;
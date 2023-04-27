import { FC } from "react";
import { useParams } from "react-router";
import EditFolderBlock from "../components/EditFolderBlock/EditFolderBlock";

const FolderEditPage:FC = () => {
    const id = Number(useParams().id);

    return ( 
        <div>
            <h1 className = "h1-title">Folder Edit</h1>
            <EditFolderBlock
                id = {id}></EditFolderBlock>
        </div>
    );
}
 
export default FolderEditPage;
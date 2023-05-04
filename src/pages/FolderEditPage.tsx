import { FC } from "react";
import { useParams } from "react-router";
import EditFolderBlock from "../components/EditFolderBlock/EditFolderBlock";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";

const FolderEditPage:FC = () => {
    const id = Number(useParams().id);

    return ( 
        <PagesWthFormLayout
            title = "Folder Edit">
            <EditFolderBlock
                id = {id}></EditFolderBlock>
        </PagesWthFormLayout>
    );
}
 
export default FolderEditPage;
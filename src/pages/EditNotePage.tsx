import { FC } from "react";
import EditNoteBlock from "../components/EditNoteBlock/EditNoteBlock";
import { useParams } from "react-router";
import PagesWthFormLayout from "../layout/PagesWthFormLayout/PagesWthFormLayout";

const EditNotePage:FC = () => {
    
    const id = Number(useParams().id);
    
    return ( 
        <PagesWthFormLayout
            title = "Edit Note">
            <EditNoteBlock
                id = {id}></EditNoteBlock>
        </PagesWthFormLayout>
     );
}
 
export default EditNotePage;
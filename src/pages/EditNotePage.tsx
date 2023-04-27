import { FC } from "react";
import EditNoteBlock from "../components/EditNoteBlock/EditNoteBlock";
import { useParams } from "react-router";

const EditNotePage:FC = () => {

    const id = Number(useParams().id);
    
    return ( 
        <div>
            <h1 className = "h1-title">Edit Note</h1>
            <EditNoteBlock
                id = {id}></EditNoteBlock>
        </div>
     );
}
 
export default EditNotePage;
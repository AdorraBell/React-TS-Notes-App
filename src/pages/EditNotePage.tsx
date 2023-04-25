import { FC } from "react";
import EditNoteBlock from "../components/EditNoteBlock/EditNoteBlock";

const EditNotePage:FC = () => {
    return ( 
        <div>
            <h1 className = "h1-title">Edit Note</h1>
            <EditNoteBlock></EditNoteBlock>
        </div>
     );
}
 
export default EditNotePage;
import { FC } from "react";
import PlusButton from "../components/UI/plusBtn/PlusButton";
import { Link } from "react-router-dom";

const NotesPage:FC = () => {

    const addNote = () => {
       
    }

    return ( 
        <div>
            <h1 className = "h1-title">Notes</h1>
            <Link to = "/add">
                <PlusButton onClick = {addNote}></PlusButton>
            </Link>
        </div>
     );
}
 
export default NotesPage;
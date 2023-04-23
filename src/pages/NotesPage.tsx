import { FC, useState } from "react";
import PlusButton from "../components/UI/plusBtn/PlusButton";
import { Link } from "react-router-dom";
import AppNavbar from "../components/UI/navbar/AppNavbar";
import NotesList from "../components/NotesList/NotesList";
import { deleteNote } from "../localStorage";

const NotesPage:FC = () => {

    let [notesList, setNotesList] = useState(JSON.parse(localStorage.getItem('notesList') || '[]'));

    const deletePoint = (id: number) => {
        setNotesList(deleteNote(id));
    }

    return ( 
        <div>
            <h1 className = "h1-title">Notes</h1>
            <AppNavbar></AppNavbar>
            { notesList.length < 1 &&
                <p className = "alert-message">You don't have any notes yet</p>
            }
            <NotesList 
                notesList={notesList} 
                deletePoint = {(id) => deletePoint(id)}
                ></NotesList>
            <Link to = "/add">
                <PlusButton></PlusButton>
            </Link>
        </div>
     );
}
 
export default NotesPage;
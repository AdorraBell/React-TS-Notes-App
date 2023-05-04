import { FC } from "react";
import NotesList from "../components/NotesList/NotesList";
import { useBlocksList } from "../hooks/useBlocksList";
import ListEmptyWarning from "../components/UI/listEmptyWarning/ListEmptyWarning";
import MainPagesLayout from "../layout/MainPagesLayout/MainPagesLayout";

const NotesPage:FC = () => {

    let notesList = useBlocksList(JSON.parse(localStorage.getItem('notesList') || '[]'));

    return ( 
        <>
            <MainPagesLayout 
                title = "Notes Page"
                addLink = "/add">
                { notesList.array.length < 1 &&
                    <ListEmptyWarning
                        listName = "notes"></ListEmptyWarning>
                }
                <NotesList 
                    notesList={notesList.array} 
                    deletePoint = {(id) => notesList.deletePoint(id, 'notesList')}
                    ></NotesList>
            </MainPagesLayout>
        </>
     );
}
 
export default NotesPage;
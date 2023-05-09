import { FC, useEffect, useCallback } from "react";
import MainPagesLayout from "../layout/MainPagesLayout/MainPagesLayout";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../store/reducers";
import NotesList from "../components/NotesList/NotesList";
import useMainInfoList from "../hooks/useMainInfoList";

const NotesPage:FC = () => {
    
    const tagsListName = 'notesTags';
    const contentListName = 'notesList';
    const sortTypeName = 'notesSortType';
    const notesList = useSelector((state: RootState) => state.sortReducer.notesList);
    const sortType = useSelector((state: RootState) => state.sortTypeReducer.notesSortType);
    const searchedTags = useSelector((state: RootState) => state.searchTagsReducer.notesTags);
    const updateData = useMainInfoList(); 

    const deleteNote = (id: number) => {
        updateData.deletePoint(id, contentListName, tagsListName);
    };

    return ( 
        <MainPagesLayout 
            title="Notes Page"
            addLink="/add"
            searchedTags={searchedTags}
            dataList={notesList}
            contentListName={contentListName}
            tagsListName={tagsListName}
            sortTypeName={sortTypeName}
            sortType={sortType}
            listType="Notes">
            <NotesList 
                notesList={notesList} 
                deletePoint={deleteNote}
                />  
        </MainPagesLayout>
     );
}
 
export default NotesPage;
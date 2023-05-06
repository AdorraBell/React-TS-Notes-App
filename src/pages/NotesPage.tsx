import { FC, useEffect } from "react";
import MainPagesLayout from "../layout/MainPagesLayout/MainPagesLayout";
import { TagType } from "../types/types";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../store/reducers";
import ListEmptyWarning from "../components/UI/listEmptyWarning/ListEmptyWarning";
import NotesList from "../components/NotesList/NotesList";
import AppFilters from "../components/AppFilters/AppFilters";
import { deletePointFromList } from "../localStorage";
import useUpdatedList from "../hooks/useUpdatedList";
import { sortListByTags } from "../helpers/sortListByTags";


const NotesPage:FC = () => {
    const dispatch = useDispatch();
    const notesList = useSelector((state: RootState) => state.sortReducer.notesList);
    const sortType = useSelector((state: RootState) => state.sortTypeReducer.notesSortType);
    const searchedTags = useSelector((state: RootState) => state.searchTagsReducer.notesTags);
    const updateData = useUpdatedList(); 

    const setSort = (sort: string) => {
        dispatch({type: sort, listType: 'notesList'});
        dispatch({type: 'setSort', listType: 'notesSortType', value: sort});
    }

    const deleteAllSelectedTags = () => {
        dispatch({type: 'deleteAllTags', listType: 'notesTags'});
        updateData.update('notesList');
    }

    const deleteTag = (index: number) => {
        dispatch({type: 'deleteTag', listType: 'notesTags', index: index});
        updateData.update('notesList');
    }

    const addTag = (data: TagType) => {
        dispatch({type: 'addTag', listType: 'notesTags', value: data});
    }

    const deletePoint = (id: number) => {
        deletePointFromList(id, 'notesList');
        updateData.update('notesList');
        dispatch({type: 'setDefault', listType: 'notesTags', value: []});
    }  

    useEffect(() => {
        let arr = sortListByTags(searchedTags, notesList);
        dispatch({type: 'set-default', listType: 'notesList', value: arr})
    }, [searchedTags])

    return ( 
        <MainPagesLayout 
            title = "Notes Page"
            addLink = "/add">
            <AppFilters
                selectedSort = {(sort) => setSort(sort)}
                defaultSortType = {sortType}
                deleteAllSelectedTags = {deleteAllSelectedTags}
                deleteTag={(index) => deleteTag(index)}
                addTag={(data) => addTag(data)}
                selectedTags = {searchedTags}
                ></AppFilters>
            { notesList.length < 1 &&
                <ListEmptyWarning
                    listName = "notes"></ListEmptyWarning>
            } 
             <NotesList 
                notesList={notesList} 
                deletePoint = {(id) => deletePoint(id)}
                ></NotesList>  
        </MainPagesLayout>
     );
}
 
export default NotesPage;
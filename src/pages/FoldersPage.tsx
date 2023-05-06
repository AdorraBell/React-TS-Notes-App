import { FC, useEffect } from "react";
import FoldersList from "../components/FoldersList/FoldersList";
import ListEmptyWarning from "../components/UI/listEmptyWarning/ListEmptyWarning";
import MainPagesLayout from "../layout/MainPagesLayout/MainPagesLayout";
import AppFilters from "../components/AppFilters/AppFilters";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../store/reducers";
import { TagType } from "../types/types";
import { deletePointFromList } from "../localStorage";
import useUpdatedList from "../hooks/useUpdatedList";
import { sortListByTags } from "../helpers/sortListByTags";

const FoldersPage:FC = () => {
    const dispatch = useDispatch();
    const foldersList = useSelector((state: RootState) => state.sortReducer.foldersList);
    const sortType = useSelector((state: RootState) => state.sortTypeReducer.foldersSortType);
    const searchedTags = useSelector((state: RootState) => state.searchTagsReducer.foldersTags);
    const updateData = useUpdatedList(); 

    const setSort = (sort: string) => {
        dispatch({type: sort, listType: 'foldersList'});
        dispatch({type: 'setSort', listType: 'foldersSortType', value: sort});
    }

    const deleteAllSelectedTags = () => {
        dispatch({type: 'deleteAllTags', listType: 'foldersTags'});
        updateData.update('foldersList');
    }

    const deleteTag = (index: number) => {
        dispatch({type: 'deleteTag', listType: 'foldersTags', index: index});
        updateData.update('foldersList');
    }

    const addTag = (data: TagType) => {
        dispatch({type: 'addTag', listType: 'foldersTags', value: data});
    }

    const deletePoint = (id: number) => {
        deletePointFromList(id, 'foldersList');
        updateData.update('foldersList');
        dispatch({type: 'setDefault', listType: 'foldersTags', value: []});
    }  
    
    useEffect(() => {
        updateTags();
    }, [searchedTags])

    const updateTags = () => {
        let arr = sortListByTags(searchedTags, foldersList);
        dispatch({type: 'set-default', listType: 'foldersList', value: arr});
    }

    return ( 
        <MainPagesLayout 
            title = "Folders Page"
            addLink = "/add-folder">
            <AppFilters
                selectedSort = {(sort) => setSort(sort)}
                defaultSortType = {sortType}
                searchByBody = {false}
                addTag = {(data) => addTag(data)}
                deleteTag={(index) => deleteTag(index)}
                deleteAllSelectedTags={deleteAllSelectedTags}
                selectedTags = {searchedTags}
                ></AppFilters>  
            { foldersList.length < 1 &&
                <ListEmptyWarning
                    listName = "folders"></ListEmptyWarning>
            }
            <FoldersList
                foldersList = {foldersList}
                deleteFolder = {(id) => deletePoint(id)}
                ></FoldersList>
        </MainPagesLayout>
     );
}
 
export default FoldersPage;


 

import { FC } from "react";
import FoldersList from "../components/FoldersList/FoldersList";
import MainPagesLayout from "../layout/MainPagesLayout/MainPagesLayout";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../store/reducers";
import useMainInfoList from "../hooks/useMainInfoList";

const FoldersPage:FC = () => {
    
    const tagsListName = 'foldersTags';
    const contentListName = 'foldersList';
    const sortTypeName = 'foldersSortType';
    const foldersList = useSelector((state: RootState) => state.sortReducer.foldersList);
    const sortType = useSelector((state: RootState) => state.sortTypeReducer.foldersSortType);
    const searchedTags = useSelector((state: RootState) => state.searchTagsReducer.foldersTags);
    const updateData = useMainInfoList(); 

    return ( 
        <MainPagesLayout 
            title = "Folders Page"
            addLink = "/add-folder"
            searchedTags = {searchedTags}
            dataList = {foldersList}
            contentListName = {contentListName}
            tagsListName = {tagsListName}
            sortTypeName = {sortTypeName}
            sortType = {sortType}
            listType = "Folders">
            <FoldersList
                foldersList = {foldersList}
                deleteFolder = {(id) => updateData.deletePoint(id, contentListName, tagsListName)}
                ></FoldersList>
        </MainPagesLayout>
     );
}
 
export default FoldersPage;


 

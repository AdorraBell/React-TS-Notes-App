import { FC } from "react";
import FoldersList from "../components/FoldersList/FoldersList";
import { useBlocksList } from "../hooks/useBlocksList";
import ListEmptyWarning from "../components/UI/listEmptyWarning/ListEmptyWarning";
import MainPagesLayout from "../layout/MainPagesLayout/MainPagesLayout";

const FoldersPage:FC = () => {

    let foldersList = useBlocksList(JSON.parse(localStorage.getItem('foldersList') || '[]'));
    
    return ( 
        <MainPagesLayout 
            title = "Folders Page"
            addLink = "/add-folder">
            { foldersList.array.length < 1 &&
                <ListEmptyWarning
                    listName = "folders"></ListEmptyWarning>
            }
            <FoldersList
                foldersList = {foldersList.array}
                deleteFolder = {(id) => foldersList.deletePoint(id, 'foldersList')}
                ></FoldersList>
        </MainPagesLayout>
     );
}
 
export default FoldersPage;


 

import { FC } from "react";
import styles from "./FoldersList.module.css"
import { FolderType } from "../../types/types";
import FolderBlock from "../UI/folderBlock/FolderBlock";

interface FoldersListProps{
    foldersList: Array<FolderType>,
    deleteFolder: (id: number) => void
}

const FoldersList:FC<FoldersListProps> = ({foldersList, deleteFolder}) => {
    return ( 
        <div className = {styles.foldersList}>
            {foldersList.map(folder => 
                <FolderBlock
                    key = {folder.id}
                    folder = {folder}
                    deleteFolder = {(id) => deleteFolder(id)}
                    ></FolderBlock>
            )}
        </div>
    );
}
 
export default FoldersList;
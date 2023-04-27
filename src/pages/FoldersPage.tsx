import { FC, useState } from "react";
import AppNavbar from "../components/UI/navbar/AppNavbar";
import PlusButton from "../components/UI/plusBtn/PlusButton";
import { Link, useNavigate } from "react-router-dom";
import FoldersList from "../components/FoldersList/FoldersList";
import { deletePointFromList } from "../localStorage";
import QuestionButton from "../components/UI/questionBtn/QuestionButton";

const FoldersPage:FC = () => {

    //let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');
    //let [selectedTags, setSelectedTags] = useState([{label: 'example', id: 'example'}]);
    let [foldersList, setFoldersList] = useState(JSON.parse(localStorage.getItem('foldersList') || '[]'));


    const deleteFolder = (id: number) => {
        setFoldersList(deletePointFromList(id, 'foldersList'));
    }

    return ( 
        <div>
            <h1 className = "h1-title">Folders Page</h1>
            <AppNavbar></AppNavbar>
            { foldersList.length < 1 &&
                <p className = "alert-message">You don't have any folders yet</p>
            }
            <FoldersList
            foldersList = {foldersList}
            deleteFolder = {(id) => deleteFolder(id)}
            ></FoldersList>
            <Link to = "/info-page">
                <QuestionButton></QuestionButton>
            </Link>
            <Link to ="/add-folder">
                <PlusButton></PlusButton>
            </Link>
            
        </div>
     );
}
 
export default FoldersPage;
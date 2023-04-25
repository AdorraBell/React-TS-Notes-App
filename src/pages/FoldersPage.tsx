import { FC, useState } from "react";
import AppNavbar from "../components/UI/navbar/AppNavbar";
import PlusButton from "../components/UI/plusBtn/PlusButton";
import { Link, useNavigate } from "react-router-dom";

const FoldersPage:FC = () => {

    let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');
    let [selectedTags, setSelectedTags] = useState([{label: 'example', id: 'example'}]);

    return ( 
        <div>
            <h1 className = "h1-title">Folders Page</h1>
            <AppNavbar></AppNavbar>
            <Link to ="/add-folder">
                <PlusButton></PlusButton>
            </Link>
            
        </div>
     );
}
 
export default FoldersPage;
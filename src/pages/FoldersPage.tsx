import { FC } from "react";
import AppNavbar from "../components/UI/navbar/AppNavbar";
import PlusButton from "../components/UI/plusBtn/PlusButton";
import { Link, useNavigate } from "react-router-dom";

const FoldersPage:FC = () => {

    const addFolder = () => {
       
    }

    return ( 
        <div>
            <h1 className = "h1-title">Folders Page</h1>
            <AppNavbar></AppNavbar>
            <PlusButton onClick = {addFolder}></PlusButton>
            
        </div>
     );
}
 
export default FoldersPage;
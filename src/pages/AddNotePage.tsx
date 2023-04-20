import { FC } from "react";
import AppForm from "../components/AppForm/AppForm";


const AddNotePage:FC = () => {
    return ( 
        <div>
            <h1 className = "h1-title">Create New Note</h1>
            <AppForm></AppForm>
        </div>
     );
}
 
export default AddNotePage;
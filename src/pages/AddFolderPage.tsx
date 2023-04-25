import {  FC, useState } from "react";
import FolderForm from "../components/FolderForm/FolderForm";
import { FolderType, NoteType, TagType } from "../types/types";
import { useNavigate } from "react-router-dom";
import { addPointToList } from "../localStorage";

const AddFolderPage:FC = () => {

    let selectedTagsList = [{label: 'example', id: 'example'}];
    let selectedNotesList: any = [];
    const navigate = useNavigate();

    // {label: `${notesTitles[0].label}`, id: `${notesTitles[0].id + Math.random()}`}
    
    const saveFolder = (folder: FolderType) => {
        addPointToList(folder, 'foldersList');
        return navigate('/folders');
    }

    return (  
        <div>
            <h1 className = "h1-title">Add Folder</h1>
            <FolderForm
                selectedTagsList = {selectedTagsList}
                selectedNotesList = {selectedNotesList}
                saveFolder = {(folder) => saveFolder(folder)}
                ></FolderForm>
        </div>
    );
}
 
export default AddFolderPage;
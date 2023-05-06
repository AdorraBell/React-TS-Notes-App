import {  FC, useState } from "react";
import AppInput from "../UI/input/AppInput";
import styles from "./AppFolder.module.css";
import InputWithDropdown from "../InputWithDropdown/InputWithDropdown";
import { FolderType, NoteTitleType, NoteType, TagType } from "../../types/types";
import { Link } from "react-router-dom";
import AppButton from "../UI/button/AppButton";
import { deleteAllSelectedPoints } from "../../helpers/deleteAllSelectedPoints";
import { deletePoint } from "../../helpers/deletePoint";
import { addNewPoint } from "../../helpers/addNewPoint";
import useInput from "../../hooks/useInput";
import WarningText from "../UI/warningText/WarningText";

interface FolderFormProps {
    selectedTagsList?: Array<TagType>,
    selectedNotesList?: Array<TagType>,
    defaultTitle?: string,
    defaultId?: number,
    saveFolder: (folder: FolderType) => void
}

const FolderForm:FC<FolderFormProps> = ({selectedTagsList, selectedNotesList, defaultTitle, saveFolder, defaultId}) => {

    let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');    
    let [selectedTags, setSelectedTags] = useState(selectedTagsList || [{label: 'example', id: 'example'}]);
    let folderTitle = useInput(defaultTitle || '');
    let notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    let notesTitles:Array<NoteTitleType> = [];

    notesList.forEach((note: NoteType) => {
        notesTitles.push({label: note.title, id: note.id});
    });

    let [selectedNotes, setSelectedNotes] = useState(selectedNotesList ? 
        selectedNotesList
        : [{label: `${notesTitles[0].label}`, id: `${notesTitles[0].id}`}]);
        

    const createFolder = (e: React.FormEvent) => {
        e.preventDefault();
        if(folderTitle.value){
            let folder = {
                id: defaultId || Date.now(),
                title: folderTitle.value,
                tags: selectedTags,
                notes: selectedNotes
            }
            saveFolder(folder);
        }else{
            folderTitle.setError('The field cannot be empty')
        }
    }

    return ( 
        <form className = {styles.folderForm} onSubmit={(e) => createFolder(e)}>
            <div className = {styles.formLine}>
                {folderTitle.error &&
                    <WarningText>{folderTitle.error}</WarningText>
                }
                <AppInput
                    changeInputVal = {(val) => folderTitle.onChange(val)}
                    title = {"Title"}
                    defaultValue = {folderTitle.value}
                ></AppInput>
            </div>
            <div className = {styles.formLine}>
                <InputWithDropdown
                    allPoints = {allTags}
                    addCurrentPoint = {(data) => addNewPoint(data, setSelectedTags, selectedTags)}
                    deletePoint = {(i) => deletePoint(i, setSelectedTags, selectedTags)}
                    deleteAllSelectedPoints = {() => deleteAllSelectedPoints(setSelectedTags)}
                    selectedPoints = {selectedTags}
                    title = {'Tags'}
                    ></InputWithDropdown> 
            </div>
            <div className = {styles.formLine}>
                <InputWithDropdown
                    allPoints = {notesTitles}
                    addCurrentPoint = {(data) => addNewPoint(data, setSelectedNotes, selectedNotes)}
                    deletePoint = {(i) => deletePoint(i, setSelectedNotes, selectedNotes)}
                    deleteAllSelectedPoints = {() => deleteAllSelectedPoints(setSelectedNotes)}
                    selectedPoints = {selectedNotes}
                    title = {'Notes'}
                    canBeCreated = {false}
                    ></InputWithDropdown> 
            </div>
            <div className = {styles.formBtns}>    
                <Link to = "/folders">
                    <AppButton 
                        type = {'button'} 
                        variant = {'greyOutlineButton'}>
                        Back
                    </AppButton>
                </Link>
                <AppButton 
                    type = {'submit'} 
                    variant = {'orangeButton'}>
                    Save
                </AppButton>  
            </div>
        </form>
     );
}
 
export default FolderForm;
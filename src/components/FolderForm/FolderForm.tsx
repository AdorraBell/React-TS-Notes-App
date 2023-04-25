import {  FC, useState } from "react";
import AppInput from "../UI/input/AppInput";
import styles from "./AppFolder.module.css";
import InputWithDropdown from "../InputWithDropdown/InputWithDropdown";
import { NoteTitleType, NoteType, TagType } from "../../types/types";
import { Link } from "react-router-dom";
import AppButton from "../UI/button/AppButton";

interface FolderFormProps {
    selectedTagsList?: Array<TagType>,
    selectedNotesList?: Array<TagType>,
    defaultTitle?: string,
    saveFolder: (folder: any) => void
}

const FolderForm:FC<FolderFormProps> = ({selectedTagsList, selectedNotesList, defaultTitle, saveFolder}) => {

    let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');    
    let [selectedTags, setSelectedTags] = useState(selectedTagsList || [{label: 'example', id: 'example'}]);
    let [folderTitle, setFolderTitle] = useState(defaultTitle);
    let notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    let notesTitles:Array<NoteTitleType> = [];

    notesList.forEach((note: NoteType) => {
        notesTitles.push({label: note.title, id: note.id});
    });

    let [selectedNotes, setSelectedNotes] = useState(selectedNotesList ? 
        selectedNotesList
        : [{label: `${notesTitles[0].label}`, id: `${notesTitles[0].id}`}]);

    const titleChanged = (val: string) => {
        setFolderTitle(val);
    }

    const addCurrentPoint = (data: TagType, setVar: any, varuable: Array<TagType>) => {
        setVar([...varuable, data]);
    }

    const deletePoint = (i: number, setVar: any, varuable: Array<TagType>) => {
        setVar([...varuable.filter((point, index) =>{
            if(index !== i) return point;
        })]);
    }

    const deleteAllSelectedPoints = (setVar: any) => {
        setVar([]);
    }

    const saveNote = (e: React.FormEvent) => {
        e.preventDefault();
        let folder = {
            id: Date.now(),
            title: folderTitle,
            tags: selectedTags,
            notes: selectedNotes
        }
        saveFolder(folder);
    }

    return ( 
        <form className = {styles.folderForm} onSubmit={(e) => saveNote(e)}>
            <AppInput
                changeInputVal = {(val) => titleChanged(val)}
                title = {"Title"}
                defaultValue = {folderTitle}
            ></AppInput>
            <InputWithDropdown
                allPoints = {allTags}
                addCurrentPoint = {(data) => addCurrentPoint(data, setSelectedTags, selectedTags)}
                deletePoint = {(i) => deletePoint(i, setSelectedTags, selectedTags)}
                deleteAllSelectedPoints = {() => deleteAllSelectedPoints(setSelectedTags)}
                selectedPoints = {selectedTags}
                title = {'Tags'}
                ></InputWithDropdown> 
            <InputWithDropdown
                allPoints = {notesTitles}
                addCurrentPoint = {(data) => addCurrentPoint(data, setSelectedNotes, selectedNotes)}
                deletePoint = {(i) => deletePoint(i, setSelectedNotes, selectedNotes)}
                deleteAllSelectedPoints = {() => deleteAllSelectedPoints(setSelectedNotes)}
                selectedPoints = {selectedNotes}
                title = {'Notes'}
                canBeCreated = {false}
                ></InputWithDropdown> 
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
                <AppButton 
                    type = {'button'} 
                    variant = {'tealOutlineButton'}>
                    Delete Folder
                </AppButton>
            </div>
        </form>
     );
}
 
export default FolderForm;
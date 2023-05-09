import {  FC, useCallback, useState } from "react";
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
    returnFolder: (folder: FolderType) => void
}

const FolderForm:FC<FolderFormProps> = ({selectedTagsList, selectedNotesList, defaultTitle, returnFolder, defaultId}) => {

    const allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');    
    const folderTitle = useInput(defaultTitle || '');
    const notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    const notesTitles:Array<NoteTitleType> = [];
    const [sendForm, setSendForm] = useState(false);
    const [selectedTags, setSelectedTags] = useState(selectedTagsList || [{label: 'example', id: 'example'}]);
    const [selectedNotes, setSelectedNotes] = useState(selectedNotesList || []);

    notesList.forEach((note: NoteType) => {
        notesTitles.push({label: note.title, id: note.id});
    });
        
    const saveFolder = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if(folderTitle.value){
            let folder = {
                id: defaultId || Date.now(),
                title: folderTitle.value,
                tags: selectedTags,
                notes: selectedNotes
            }
            returnFolder(folder);
        }else{
            folderTitle.setError('The field cannot be empty')
        }
    }, [sendForm]);

    const addNewTag = (data: TagType) => addNewPoint(data, setSelectedTags, selectedTags);
    const deleteTag = (index: number) => deletePoint(index, setSelectedTags, selectedTags);
    const deleteAllSelectedTags = () => deleteAllSelectedPoints(setSelectedTags);
    const addNewNote = (data: TagType) => addNewPoint(data, setSelectedNotes, selectedNotes);
    const deleteNote = (index: number) => deletePoint(index, setSelectedNotes, selectedNotes);
    const deleteAllSelectedNotes = () => deleteAllSelectedPoints(setSelectedNotes);
    const clickedButtonSendForm = () => setSendForm(!sendForm);

    return ( 
        <form className={styles.folderForm} onSubmit={saveFolder}>
            <div className={styles.formLine}>
                {folderTitle.error &&
                    <WarningText>{folderTitle.error}</WarningText>
                }
                <AppInput
                    changeInputVal={folderTitle.onChange}
                    title={"Title"}
                    defaultValue={folderTitle.value}
                />
            </div>
            <div className={styles.formLine}>
                <InputWithDropdown
                    allPoints={allTags}
                    addCurrentPoint={addNewTag}
                    deletePoint={deleteTag}
                    deleteAllSelectedPoints={deleteAllSelectedTags}
                    selectedPoints={selectedTags}
                    title={'Tags'}
                    /> 
            </div>
            <div className={styles.formLine}>
                <InputWithDropdown
                    allPoints={notesTitles}
                    addCurrentPoint={addNewNote}
                    deletePoint={deleteNote}
                    deleteAllSelectedPoints={deleteAllSelectedNotes}
                    selectedPoints={selectedNotes}
                    title={'Notes'}
                    canBeCreated={false}
                    /> 
            </div>
            <div className={styles.formBtns}>    
                <Link to="/folders">
                    <AppButton 
                        type={'button'} 
                        variant={'greyOutlineButton'}>
                        Back
                    </AppButton>
                </Link>
                <div onClick = {clickedButtonSendForm}>
                    <AppButton 
                        type={'submit'} 
                        variant={'orangeButton'}>
                        Save
                    </AppButton>  
                </div>
            </div>
        </form>
     );
}
 
export default FolderForm;
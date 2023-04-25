import AppButton from "../UI/button/AppButton";
import AppInput from "../UI/input/AppInput";
import AppTextarea from "../UI/textarea/AppTextarea";
import styles from "./AppForm.module.css";
import { Link } from "react-router-dom";
import { FC } from "react";
import InputWithDropdown from "../InputWithDropdown/InputWithDropdown";
import {useState} from "react";
import {TagType, NoteType} from "../../types/types";

interface AppFormProps{
    selectedTags?: Array<TagType>,
    allTags: Array<TagType>,
    addTag: (data: TagType) => void,
    deleteTag: (index: number) => void,
    deleteAllSelectedTags: () => void,
    returnNote: (data: NoteType) => void,
    defaultTitle?: string,
    defaultBody?: string,
    defaultId?: number
}

const AppForm:FC<AppFormProps> = ({allTags, selectedTags, addTag, deleteTag, deleteAllSelectedTags, returnNote, defaultTitle, defaultBody, defaultId}) => {
    let [titleVal, setTitleVal] = useState(defaultTitle || '');
    let [textareaVal, setTextareaVal] = useState(defaultBody || '');

    const saveNote = (e: any) => {
        e.preventDefault();
        let note = {
            body: textareaVal, 
            id: defaultId || Date.now(), 
            tags: selectedTags, 
            title: titleVal};
        returnNote(note);
    }

    const changeInputVal = (val: string) => {
        setTitleVal(val);
    }

    const changeTextarea = (val: string) => {
        setTextareaVal(val);
    } 

    return ( 
        <form onSubmit = {(e) => saveNote(e)} className = {styles.appForm}>
            <div className = {styles.formLine}>
                <AppInput 
                    defaultValue = {defaultTitle} 
                    changeInputVal = {(val) => changeInputVal(val)} 
                    title = {'Title'}/>
                <InputWithDropdown 
                    allPoints = {allTags} 
                    addCurrentPoint = {(data) => addTag(data)}
                    deletePoint = {(index) => deleteTag(index)}
                    title = {'Tags'}
                    selectedPoints = {selectedTags}
                    deleteAllSelectedPoints = {deleteAllSelectedTags}/>
            </div>
            <div className = {styles.formLine}>
                <AppTextarea 
                    defaultValue = {defaultBody}
                    changeTextarea = {(val) => changeTextarea(val)}  
                    title = {'Note Body'}/>
            </div>
            <div className = {styles.formBtns}>
                <Link to = "..">
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
 
export default AppForm;
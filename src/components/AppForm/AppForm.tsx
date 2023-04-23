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
    returnNote: (data: NoteType) => void
}

const AppForm:FC<AppFormProps> = ({allTags, selectedTags, addTag, deleteTag, deleteAllSelectedTags, returnNote}) => {
    
    const saveNote = (e: any) => {
        e.preventDefault();
        let note = {body: textareaVal, id: Date.now(), tags: selectedTags, title: titleVal};
        returnNote(note);
    }

    const changeInputVal = (val: string) => {
        setTitleVal(val);
    }

    const changeTextarea = (val: string) => {
        setTextareaVal(val);
    }

    let [titleVal, setTitleVal] = useState('');
    let [textareaVal, setTextareaVal] = useState('');

    return ( 
        <form onSubmit = {(e) => saveNote(e)} className = {styles.appForm}>
            <div className = {styles.formLine}>
                <AppInput 
                    value = {''} 
                    changeInputVal = {(val) => changeInputVal(val)} 
                    title = {'Title'}/>
                <InputWithDropdown 
                    allTags = {allTags} 
                    addTag = {(data) => addTag(data)}
                    deleteTag = {(index) => deleteTag(index)}
                    title = {'Tags'}
                    selectedTags = {selectedTags}
                    deleteAllSelectedTags = {deleteAllSelectedTags}/>
            </div>
            <div className = {styles.formLine}>
                <AppTextarea 
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
import AppButton from "../UI/button/AppButton";
import AppInput from "../UI/input/AppInput";
import AppTextarea from "../UI/textarea/AppTextarea";
import styles from "./AppForm.module.css";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import InputWithDropdown from "../InputWithDropdown/InputWithDropdown";
import {TagType, NoteType} from "../../types/types";
import { deleteAllSelectedPoints } from "../../helpers/deleteAllSelectedPoints";
import { deletePoint } from "../../helpers/deletePoint";
import { addNewPoint } from "../../helpers/addNewPoint";
import useInput from "../../hooks/useInput";
import WarningText from "../UI/warningText/WarningText";

interface AppFormProps{
    selectedTagsList?: Array<TagType>,
    returnNote: (data: NoteType) => void,
    defaultTitle?: string,
    defaultBody?: string,
    defaultId?: number
}

const AppForm:FC<AppFormProps> = ({selectedTagsList, returnNote, defaultTitle, defaultBody, defaultId}) => {
    const allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');  
    const titleValue = useInput(defaultTitle || '');
    const [textareaVal, setTextareaVal] = useState(defaultBody || '');
    const [selectedTags, setSelectedTags] = useState(selectedTagsList || [{label: 'example', id: 'example'}]);

    const saveNote = (e: React.FormEvent) => {
        e.preventDefault();
        if(titleValue.value){
            let note = {
                body: textareaVal, 
                id: defaultId || Date.now(), 
                tags: selectedTags, 
                title: titleValue.value};
            returnNote(note);
        }else{
            titleValue.setError('The field cannot be empty')
        }
    }

    const changeTextarea = (val: string) => {
        setTextareaVal(val);
    } 

    return ( 
        <form onSubmit = {(e) => saveNote(e)} className = {styles.appForm}>
            <div className = {styles.formLine}>
                {titleValue.error &&
                    <WarningText>{titleValue.error}</WarningText>
                }
                <AppInput 
                    defaultValue = {titleValue.value} 
                    changeInputVal = {(value) => titleValue.onChange(value)} 
                    title = {'Title'}/>
            </div>
            <div className = {styles.formLine}>
                <InputWithDropdown 
                    allPoints = {allTags} 
                    addCurrentPoint = {(data) => addNewPoint(data, setSelectedTags, selectedTags)}
                    deletePoint = {(index) => deletePoint(index, setSelectedTags, selectedTags)}
                    title = {'Tags'}
                    selectedPoints = {selectedTags}
                    deleteAllSelectedPoints = {() => deleteAllSelectedPoints(setSelectedTags)}/>
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
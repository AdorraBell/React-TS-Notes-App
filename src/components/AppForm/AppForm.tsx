import AppButton from "../UI/button/AppButton";
import AppInput from "../UI/input/AppInput";
import AppTextarea from "../UI/textarea/AppTextarea";
import styles from "./AppForm.module.css";
import { Link } from "react-router-dom";
import { FC, useCallback, useState } from "react";
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

const AppForm:FC<AppFormProps> = (props) => {

    const {
        selectedTagsList, 
        returnNote, 
        defaultTitle, 
        defaultBody, 
        defaultId
    } = props;
    
    const allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');  
    const titleValue = useInput(defaultTitle || '');
    const [textareaVal, setTextareaVal] = useState(defaultBody || '');
    const [selectedTags, setSelectedTags] = useState(selectedTagsList || [{label: 'example', id: 'example'}]);
    const [sendForm, setSendForm] = useState(false);

    const saveNote = useCallback((e: React.FormEvent) => {
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
    }, [sendForm]);

    const changeTextarea = (val: string) => setTextareaVal(val);
    const addNewPointToInput = (data: TagType) => addNewPoint(data, setSelectedTags, selectedTags);
    const deletePointFromInput = (index: number) => deletePoint(index, setSelectedTags, selectedTags);
    const deleteAllPointsFromInput = () => deleteAllSelectedPoints(setSelectedTags);
    const clickedButtonSendForm = () => setSendForm(!sendForm);

    return ( 
        <form 
            onSubmit={saveNote} 
            className={styles.appForm}>
            <div className={styles.formLine}>
                {titleValue.error &&
                    <WarningText>{titleValue.error}</WarningText>
                }
                <AppInput 
                    defaultValue={titleValue.value} 
                    changeInputVal={titleValue.onChange} 
                    title='Title'/>
            </div>
            <div className={styles.formLine}>
                <InputWithDropdown 
                    allPoints={allTags} 
                    addCurrentPoint={addNewPointToInput}
                    deletePoint={deletePointFromInput}
                    title='Tags'
                    selectedPoints={selectedTags}
                    deleteAllSelectedPoints={deleteAllPointsFromInput}/>
            </div>
            <div className={styles.formLine}>
                <AppTextarea 
                    defaultValue={defaultBody}
                    changeTextarea={changeTextarea}  
                    title='Note Body'/>
            </div>
            <div className={styles.formBtns}>
                <Link to="..">
                    <AppButton 
                        type='button' 
                        variant='greyOutlineButton'>
                        Back
                    </AppButton>
                </Link>
                <div onClick = {clickedButtonSendForm}>
                    <AppButton 
                        type='submit' 
                        variant='orangeButton'>
                        Save
                    </AppButton>
                </div>
                <Link to="/info-page">
                    <AppButton 
                        type='button' 
                        variant='tealOutlineButton'>
                        Read about formatting syntax
                    </AppButton>
                </Link>
            </div>
        </form>
    );
}
 
export default AppForm;
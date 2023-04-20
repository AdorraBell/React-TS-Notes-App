import AppButton from "../UI/button/AppButton";
import AppInput from "../UI/input/AppInput";
import AppTextarea from "../UI/textarea/AppTextarea";
import styles from "./AppForm.module.css";
import { Link } from "react-router-dom";

const AppForm = () => {
    
    const saveNote = () => {

    }

    const changeInputVal = (val: string) => {
        
    }

    const changeInputVal1 = (val: string) => {
        
    }

    const changeTextarea = (val: string) => {

    }

    return ( 
        <form onSubmit = {saveNote} className = {styles.appForm}>
            <div className = {styles.formLine}>
                <AppInput 
                    value = {''} 
                    changeInputVal = {changeInputVal} 
                    title = {'Title'}/>
                <AppInput 
                    value = {''} 
                    changeInputVal = {changeInputVal1} 
                    title = {'Tags'}/>
            </div>
            <div className = {styles.formLine}>
                <AppTextarea 
                    changeTextarea = {changeTextarea} 
                    maxWidth = {'100%'} 
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
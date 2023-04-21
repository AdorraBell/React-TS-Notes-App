import { FC, useEffect } from "react";
import styles from "./InputWithDropdown.module.css";
import ArrowIcon from "../UI/ArrowIcon";
import CrossIcon from "../UI/CrossIcon";
import {useState} from "react";
import { TagType } from "../../types/types";


interface InputWithDropdownProps {
    allTags: Array<TagType>,
    selectedTags?: Array<TagType>,
    addTag: (data: TagType) => void,
    title?: string,
    deleteTag: (index: number) => void,
    deleteAllSelectedTags: () => void
}

const InputWithDropdown:FC<InputWithDropdownProps> = ({allTags, selectedTags, addTag, title, deleteTag, deleteAllSelectedTags}) => {

    let [createTag, setCreateTag] = useState('');
    let [showDropdown, setShowDropdown] = useState(false);
    let [defaultDropdownPointText, setDefaultDropdownPointText] = useState('Create');
    let [tagAlreadyExist, setTagAlreadyExist] = useState(false);
    let [showError, setShowError] = useState(false);

    const onKeyDown = (e: any) => {
        if(e.code === 'Enter'){
            e.preventDefault();
            if(createTag !== ''){
                addPoint(createTag);
            }
        }else if(e.code === 'Backspace'){
            if(createTag === ''){        
                if(selectedTags){
                    let index = selectedTags.length - 1;
                    deleteTag(index);
                }   
            }
        }
    }

    const addPoint = (createTag: any) => {
        if(createTag !== ''){ 
            let tag = {label: createTag, id: createTag};
            if(dublCheck(tag) !== true){
                addTag(tag);
                setCreateTag('');
            }else{
                setShowError(true);
            }  
        }
    }
    
    const dublCheck = (data: TagType) => {
        if(selectedTags !== undefined){
            for(let i = 0; i < selectedTags.length; i ++){
                if (selectedTags[i].label == data.label) return true;    
            }
            return false;
        } 
    }

    useEffect(() => {
        setTimeout(() => {
            setShowError(false);
        }, 1000)
    }, [showError])

    useEffect(() => {
        let tag = {label: createTag, id: createTag};
        if(dublCheck(tag)){
            setDefaultDropdownPointText('Already exist');
            setTagAlreadyExist(true);
        }else{
            setDefaultDropdownPointText('Create');
            setTagAlreadyExist(false);
        }
    }, [createTag])

    return ( 
        <div className={styles.inputWthDropdown}>
            {title &&
                <h3 className = {styles.appInputTitle}>{title}</h3>
            }
            {showError &&
                <div className = {styles.inputWthDropdown__error}>Tag already added</div>
            }
            
            <div className={styles.inputWthDropdown__main}>
                <div className={styles.inputWthDropdown__tags}>
                    {selectedTags &&
                        selectedTags.map((tag, index) =>
                            <div className={styles.inputWthDropdown__tag} key = {tag.id}>
                                <span className={styles.inputWthDropdown__tagText}>
                                    {tag.label}
                                </span>
                                <div className={styles.inputWthDropdown__tagCross} onClick = {() => deleteTag(index)}>
                                <CrossIcon color = {'#8f8e94'}></CrossIcon>
                                </div>    
                            </div>
                        )
                    }
                </div>
                
                <input type = "text"  className={styles.inputWthDropdown__input} 
                    value = {createTag}
                    onChange = {(e) => setCreateTag(e.target.value)} 
                    onKeyDown={(e) => onKeyDown(e)}
                    />
            
                <div className={styles.inputWthDropdown__iconsWrapper}>
                    <div 
                        className={styles.inputWthDropdown__crossIcon}
                        onClick = {deleteAllSelectedTags}>
                        <CrossIcon color = {'#8f8e94'}></CrossIcon>
                    </div>
                    <div className={styles.inputWthDropdown__line}></div>
                    <div 
                        onClick = {() => setShowDropdown(!showDropdown)}
                        className={styles.inputWthDropdown__arrowIcon} >
                        <ArrowIcon color = {'#8f8e94'}></ArrowIcon>
                    </div>
                </div>
            </div>

            {((createTag !== '' ) || (showDropdown)) &&
                <div className={styles.inputWthDropdown__dropdown}>
                    {allTags.map(tag =>
                        <div className={styles.inputWthDropdown__dropdownPoint} key = {tag.id} onClick = {() => addPoint(tag.label)}>
                            {tag.label}
                        </div>
                    )}
                    <div 
                        className={styles.inputWthDropdown__dropdownPointDefault}
                        onClick = {() => addPoint(createTag)}
                        style = {{
                            background: tagAlreadyExist ? '#d4bebc' : '#cfc6b2'
                        }}
                        >
                        {defaultDropdownPointText} "<span className = {styles.createTag}>{createTag}</span>"
                    </div>
                </div>    
            }
        </div>
    );
}
 
export default InputWithDropdown;
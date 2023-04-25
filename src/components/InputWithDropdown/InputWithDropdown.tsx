import { FC, useEffect } from "react";
import styles from "./InputWithDropdown.module.css";
import ArrowIcon from "../UI/ArrowIcon";
import CrossIcon from "../UI/CrossIcon";
import {useState} from "react";
import { NoteTitleType, TagType } from "../../types/types";


type selectedPointsType = Array<TagType> | Array<NoteTitleType>;

interface InputWithDropdownProps {
    allPoints: selectedPointsType,
    selectedPoints?: Array<TagType>,
    addCurrentPoint: (data: TagType) => void,
    title?: string,
    deletePoint: (index: number) => void,
    deleteAllSelectedPoints: () => void,
    canBeCreated?: boolean
}

const InputWithDropdown:FC<InputWithDropdownProps> = ({allPoints, selectedPoints, addCurrentPoint, title, deletePoint, deleteAllSelectedPoints, canBeCreated}) => {

    let [createTag, setCreateTag] = useState('');
    let [showDropdown, setShowDropdown] = useState(false);
    let [defaultDropdownPointText, setDefaultDropdownPointText] = useState('Create');
    let [pointAlreadySelected, setPointAlreadySelected] = useState(false);
    let [showError, setShowError] = useState(false);
    let pointCanBeCreated = canBeCreated;

    if(pointCanBeCreated === undefined) pointCanBeCreated = true;

    const onKeyDown = (e: React.KeyboardEvent) => {
        if(e.code === 'Enter'){
            e.preventDefault();
            if((createTag !== '') && pointCanBeCreated){
                addPoint(createTag);
            }
        }else if(e.code === 'Backspace'){
            if(createTag === ''){        
                if(selectedPoints){
                    let index = selectedPoints.length - 1;
                    deletePoint(index);
                }   
            }
        }
    }

    const addPoint = (createTag: string, id?: any) => {
        if(createTag.length > 0){ 
            let tag = {label: createTag, id: id !== undefined ? id : createTag};  
            if((dublCheck(tag) !== true) && (pointAlreadySelected !== true)){
                addCurrentPoint(tag);
                setCreateTag('');
            }else{
                setShowError(true);
            }  
        }
    }
    
    const dublCheck = (data: TagType) => {
        if((selectedPoints !== null) && (selectedPoints !== undefined)){
            for(let i = 0; i < selectedPoints.length; i ++){
                if (selectedPoints[i].label == data.label) return true;    
            }
            return false;
        } 
    }

    const setError = (text: string, showArr: boolean) => {
        setDefaultDropdownPointText(text);
        setPointAlreadySelected(showArr);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowError(false);
        }, 1000)
    }, [showError])

    useEffect(() => {
        let tag = {label: createTag.trim(), id: createTag.trim()};
        dublCheck(tag) ? setError('Already selected', true) : setError('Create', false);
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
                    {selectedPoints &&
                        selectedPoints.map((tag, index) =>
                            <div className={styles.inputWthDropdown__tag} key = {tag.id}>
                                <span className={styles.inputWthDropdown__tagText}>
                                    {tag.label}
                                </span>
                                <div 
                                    className={styles.inputWthDropdown__tagCross} 
                                    onClick = {() => deletePoint(index)}>
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
                        onClick = {deleteAllSelectedPoints}>
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
                    {allPoints.map(tag =>
                        <div 
                            className={styles.inputWthDropdown__dropdownPoint} 
                            key = {tag.id} 
                            onClick = {() => addPoint(tag.label, tag.id)}>
                            {tag.label}
                        </div>
                    )}
                    {pointCanBeCreated &&
                        <div 
                            className={styles.inputWthDropdown__dropdownPointDefault}
                            onClick = {() => addPoint(createTag)}
                            style = {{
                                background: pointAlreadySelected ? '#d4bebc' : '#cfc6b2'
                            }}
                            >
                            {defaultDropdownPointText} "<span className = {styles.createTag}>{createTag.trim()}</span>"
                        </div>
                    }
                </div>    
            }
        </div>
    );
}
 
export default InputWithDropdown;
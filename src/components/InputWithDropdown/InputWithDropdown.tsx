import { FC, useEffect } from "react";
import styles from "./InputWithDropdown.module.css";
import ArrowIcon from "../UI/ArrowIcon";
import CrossIcon from "../UI/CrossIcon";
import { useState } from "react";
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

const InputWithDropdown:FC<InputWithDropdownProps> = (props) => {

    const {
        allPoints, 
        selectedPoints, 
        addCurrentPoint, 
        title, 
        deletePoint, 
        deleteAllSelectedPoints, 
        canBeCreated
    } = props;

    const [createTag, setCreateTag] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [defaultDropdownPointText, setDefaultDropdownPointText] = useState('Create');
    const [pointAlreadySelected, setPointAlreadySelected] = useState(false);
    const [showError, setShowError] = useState(false);
    const [pointCanBeCreated, setPointCanBeCreated] = useState(canBeCreated);

    if(pointCanBeCreated === undefined) setPointCanBeCreated(true);

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

    const addPoint = (createTag: string, id?: string | number) => {
        if(createTag.length > 0){ 
            let tag = {label: createTag, id: id !== undefined ? id : createTag};  
            if((dublCheck(tag) !== true) && (pointAlreadySelected !== true)){
                addCurrentPoint(tag);
                setCreateTag('');
            }else{
                setShowError(true);
            }  
        }
    };
    
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
        const tag = {label: createTag.trim(), id: createTag.trim()};
        dublCheck(tag) ? setError('Already selected', true) : setError('Create', false);
    }, [createTag])

    const deleteClickedPoint = (e: React.MouseEvent<HTMLElement>) => {
        deletePoint(Number(e.currentTarget.dataset.index));
    }
    const createSelectedTag = (e: React.FormEvent<HTMLInputElement>) => setCreateTag(e.currentTarget.value);
    const addSelectedPoint = () => addPoint(createTag);
    const changeDropdownVisibility = () => setShowDropdown(!showDropdown);
    const addEnteredLine = (e: React.MouseEvent<HTMLElement>) => {
        const label = e.currentTarget.innerHTML;
        const id = e.currentTarget.dataset.id;
        addPoint(label, id)
    };

    return ( 
        <div className={styles.inputWthDropdown}>
            {title &&
                <h3 className={styles.appInputTitle}>
                    {title}
                </h3>
            }
            {showError &&
                <div className={styles.inputWthDropdown__error}>
                    Tag already added
                </div>
            }
            <div className={styles.inputWthDropdown__main}>
                <div className={styles.inputWthDropdown__tags}>
                    {selectedPoints &&
                        selectedPoints.map((tag, index) =>
                            <div 
                                className={styles.inputWthDropdown__tag} 
                                key={tag.id}>
                                <span className={styles.inputWthDropdown__tagText}>
                                    {tag.label}
                                </span>
                                <div 
                                    className={styles.inputWthDropdown__tagCross} 
                                    data-index={index}
                                    onClick={deleteClickedPoint}>
                                        <CrossIcon color={'#8f8e94'} />
                                </div>    
                            </div>
                        )
                    }
                </div>
                <input 
                    type="text"  
                    className={styles.inputWthDropdown__input} 
                    value={createTag}
                    onChange={createSelectedTag} 
                    onKeyDown={onKeyDown}
                    />
                <div className={styles.inputWthDropdown__iconsWrapper}>
                    <div 
                        className={styles.inputWthDropdown__crossIcon}
                        onClick={deleteAllSelectedPoints}>
                        <CrossIcon color={'#8f8e94'} />
                    </div>
                    <div className={styles.inputWthDropdown__line}></div>
                    <div 
                        onClick={changeDropdownVisibility}
                        className={styles.inputWthDropdown__arrowIcon} >
                        <ArrowIcon color={'#8f8e94'} />
                    </div>
                </div>
            </div>
            {((createTag !== '' ) || (showDropdown)) &&
                <div className={styles.inputWthDropdown__dropdown}>
                    {allPoints.map(tag =>
                        <div 
                            className={styles.inputWthDropdown__dropdownPoint} 
                            key={tag.id} 
                            data-id={tag.id}
                            onClick={addEnteredLine}>
                            {tag.label}
                        </div>
                    )}
                    {pointCanBeCreated &&
                        <div 
                            className={styles.inputWthDropdown__dropdownPointDefault}
                            onClick={addSelectedPoint}
                            style={{
                                background: pointAlreadySelected ? '#d4bebc' : '#cfc6b2'
                            }}
                            >
                            {defaultDropdownPointText} "<span className={styles.createTag}>{createTag.trim()}</span>"
                        </div>
                    }
                </div>    
            }
        </div>
    );
}
 
export default InputWithDropdown;
import { FC } from "react";
import AppInput from "../UI/input/AppInput";
import styles from "./AppFolder.module.css";
import InputWithDropdown from "../InputWithDropdown/InputWithDropdown";
import { TagType } from "../../types/types";


interface FolderFormProps {
    allTags: Array<TagType>,
    selectedTag?: Array<TagType>,
    addedTag: (data: TagType) => void,
    title?: string,
    deleteTag: (index: number) => void,
    deleteAllSelectedTags: () => void
}

const FolderForm:FC<FolderFormProps> = () => {

    

    const titleChanged = (val: string) => {

    }

    return ( 
        <div className = {styles.folderForm}>
            <AppInput
                changeInputVal = {(val) => titleChanged(val)}
                title = "Title"
            ></AppInput>
            {/* <InputWithDropdown
                allPoints = {allTags}
                ></InputWithDropdown> */}
        </div>
     );
}
 
export default FolderForm;
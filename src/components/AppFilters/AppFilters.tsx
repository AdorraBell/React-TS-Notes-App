import { FC } from "react";
import AppSort from "../AppSort/AppSort";
import styles from "./AppFilters.module.css";
import InputWithDropdown from "../InputWithDropdown/InputWithDropdown";
import { TagType } from "../../types/types";

interface AppFiltersProps {
    selectedSort: (val: string) => void,
    defaultSortType?: string,
    searchByBody?: boolean,
    addTag: (data: TagType) => void,
    deleteTag: (id: number) => void,
    deleteAllSelectedTags: () => void,
    selectedTags?: Array<TagType>,
}

const AppFilters:FC<AppFiltersProps> = ({selectedSort, defaultSortType, searchByBody, deleteAllSelectedTags, deleteTag, addTag, selectedTags}) => {
    let allTags = JSON.parse(localStorage.getItem('tagsList') || '[]');
    return ( 
        <div className = {styles.filtersWrapper}>
            <AppSort
                selectedSort = {(val) => selectedSort(val)}
                defaultSortType = {defaultSortType}
                searchByBody = {searchByBody}></AppSort>
            <div className = {styles.inputWthDropdown__wrapper}>   
                <InputWithDropdown
                    allPoints={allTags}
                    deleteAllSelectedPoints = {() => deleteAllSelectedTags()}
                    deletePoint={(index) => deleteTag(index)}
                    addCurrentPoint={(data) => addTag(data)}
                    title = "Search by tags"
                    selectedPoints={selectedTags}
                    ></InputWithDropdown>  
            </div> 
        </div>
    );
}
 
export default AppFilters;
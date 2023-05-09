import { FC, useState } from "react";
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

const AppFilters:FC<AppFiltersProps> = (props) => {

    const {
        selectedSort, 
        defaultSortType, 
        searchByBody, 
        deleteAllSelectedTags, 
        deleteTag, 
        addTag, 
        selectedTags
    } = props;

    const [allTags, setAllTags] = useState(JSON.parse(localStorage.getItem('tagsList') || '[]'));
    
    return ( 
        <div className={styles.filtersWrapper}>
            <AppSort
                selectedSort={selectedSort}
                defaultSortType={defaultSortType}
                searchByBody={searchByBody} 
                />
            <div className={styles.inputWthDropdown__wrapper}>   
                <InputWithDropdown
                    allPoints={allTags}
                    deleteAllSelectedPoints={deleteAllSelectedTags}
                    deletePoint={deleteTag}
                    addCurrentPoint={addTag}
                    title='Search by tags'
                    selectedPoints={selectedTags}
                    />  
            </div> 
        </div>
    );
}
 
export default AppFilters;
import { FC } from "react";
import styles from "./AppSort.module.css";

interface AppSortProps {
    selectedSort: (val: string) => void,
    defaultSortType?: string,
    searchByBody?: boolean
}

const AppSort:FC<AppSortProps> = ({selectedSort, defaultSortType, searchByBody}) => {

    return ( 
        <div className = {styles.sortLine}>
            <h3 className = {styles.sortLine__title}>Sort</h3>
                <select 
                    onChange = {(e)=> selectedSort(e.target.value)} 
                    className = {styles.sortLine__select} 
                    defaultValue={defaultSortType}>
                        <option 
                            value = 'title' 
                            className = {styles.sortLine__option}>by title</option>
                            {searchByBody !== false &&
                                <option value = 'body' 
                                    className = {styles.sortLine__option}>by content</option>
                            }
                        <option 
                            value = 'id-to-newer' 
                            className = {styles.sortLine__option}>sort by creation date ↑</option>
                        <option 
                            value = 'id-to-older' 
                            className = {styles.sortLine__option}>sort by creation date ↓</option>
                </select>
        </div>
    );
}
 
export default AppSort;
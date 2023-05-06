import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../store/reducers";

const useUpdatedList = () => {
    const dispatch = useDispatch();
    let foldersSortType = useSelector((state: RootState) => state.sortTypeReducer.foldersSortType);
    let notesSortType = useSelector((state: RootState) => state.sortTypeReducer.notesSortType);
    const searchedTags = useSelector((state: RootState) => state.searchTagsReducer.notesTags);

    const update = (listType: string) => {
        let sortType;
        let updatedList: any = JSON.parse(localStorage.getItem(listType) || '[]');

        switch(listType){
            case 'notesList': sortType = notesSortType;
            break;
            case 'foldersList': sortType = foldersSortType;
            break;
        }

        dispatch({type: 'set-default', listType: listType, value: updatedList});
        dispatch({type: sortType, listType: listType});   
    }
    
    return { update };
}

export default useUpdatedList;
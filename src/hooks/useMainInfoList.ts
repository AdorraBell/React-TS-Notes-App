import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../store/reducers";
import { NoteType, TagType } from "../types/types";
import { deletePointFromList } from "../localStorage";

const useMainInfoList = () => {
    const dispatch = useDispatch();
    const foldersSortType = useSelector((state: RootState) => state.sortTypeReducer.foldersSortType);
    const notesSortType = useSelector((state: RootState) => state.sortTypeReducer.notesSortType);

    const update = (contentListName: string) => {
        let sortType;
        let updatedList: Array<TagType> | Array<NoteType> = JSON.parse(localStorage.getItem(contentListName) || '[]');

        switch(contentListName){
            case 'notesList': sortType = notesSortType;
            break;
            case 'foldersList': sortType = foldersSortType;
            break;
        }

        dispatch({type: 'set-default', listType: contentListName, value: updatedList});
        dispatch({type: sortType, listType: contentListName});   
    }

    const deletePoint = (id: number, contentListName: string, tagsListName: string) => {
        deletePointFromList(id, contentListName);
        update(contentListName);
        dispatch({type: 'setDefault', listType: tagsListName, value: []});
    } 
    
    return { 
        update, 
        deletePoint 
    };
}

export default useMainInfoList;
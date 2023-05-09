import { useDispatch } from "react-redux/es/exports";
import useMainInfoList from "./useMainInfoList";
import { FolderType, NoteType, TagType } from "../types/types";
import { useEffect } from "react";
import { sortListByTags } from "../helpers/sortListByTags";

export const useMainPagesFiltersActions = (searchedTags: Array<TagType>, currentList: Array<FolderType> | Array<NoteType>, contentListName: string) => {

    const dispatch = useDispatch();
    const updateData = useMainInfoList();

    const setSort = (sort: string, listType: string, sortType: string) => {
        dispatch({type: sort, listType: listType});
        dispatch({type: 'setSort', listType: sortType, value: sort});
    }

    const deleteAllSelectedTags = (listType: string, updatedList: string) => {
        dispatch({type: 'deleteAllTags', listType: listType});
        updateData.update(updatedList);
    }

    const deleteTag = (index: number, listType: string, updatedList: string) => {
        dispatch({type: 'deleteTag', listType: listType, index: index});
        updateData.update(updatedList);
    }

    const addTag = (data: TagType, listType: string) => {
        dispatch({type: 'addTag', listType: listType, value: data});
    }

    useEffect(() => {
        let sortedList = sortListByTags(searchedTags, currentList);
        dispatch({type: 'set-default', listType: contentListName, value: sortedList});
    }, [searchedTags])

    return {
        setSort,
        deleteAllSelectedTags,
        deleteTag,
        addTag,
    }
}
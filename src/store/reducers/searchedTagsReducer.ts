import { TagType } from "../../types/types";

const defaulState = {
    notesTags: [],
    foldersTags: []
}

interface ActionType {
    type: string,
    listType: string,
    value: string,
    index: number
}

export const searchTagsReducer = (state: typeof defaulState = defaulState, action: ActionType) => {

    const listType = action.listType === 'notesTags' ? state.notesTags : state.foldersTags;

    switch(action.type){
        case 'addTag': 
            return {...state, [action.listType]: [...listType, action.value]};
        case 'deleteAllTags': 
            return {...state, [action.listType]: []};
        case 'deleteTag': 
            return {...state, [action.listType]: [...listType.filter((point: TagType, pointIndex: number) => {
                if (action.index !== pointIndex) return point;
            })]};
        case 'setDefault': 
            return {...state, [action.listType]: action.value};
        default: 
            return state;
    }

}



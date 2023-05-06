import { TagType } from "../../types/types";

const defaulState = {
    notesTags: [],
    foldersTags: []
}

export const searchTagsReducer = (state: typeof defaulState = defaulState, action: any) => {

    let listType;
    action.listType === 'notesTags' ? listType = state.notesTags : listType = state.foldersTags;

    switch(action.type){
        case 'addTag': return {...state, [action.listType]: [...listType, action.value]};
        case 'deleteAllTags': return {...state, [action.listType]: []};
        case 'deleteTag': return {...state, [action.listType]: [...listType.filter((point: TagType, i: number) => {
            if (action.index !== i) return point;
        })]};
        case 'setDefault': return {...state, [action.listType]: action.value};
        default: return state;
    }

}



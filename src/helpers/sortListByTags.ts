import { FolderType, NoteType, TagType } from "../types/types";

type folderNoteType = FolderType | NoteType;

export const sortListByTags = (tags: Array<TagType>, list: Array<folderNoteType>) => {
    let arr = list.filter(point => {
        if(point.tags !== undefined){
            if(compareTags(point.tags, tags) !== false) return point;
        }   
    });
    return arr;   
}

const compareTags = (pointTags: Array<TagType>, allSearchedTags: Array<TagType>) => {
    let calcMatches = 0;
    pointTags.forEach(noteTag => {
        for(let i = 0; i < allSearchedTags.length; i++){ 
            if(noteTag.label === allSearchedTags[i].label) calcMatches ++;
        }
    })
    return calcMatches === allSearchedTags.length ? true : false;
}
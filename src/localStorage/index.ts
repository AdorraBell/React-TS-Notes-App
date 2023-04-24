import { NoteType, TagType } from "../types/types";

let notesList: Array<NoteType> =  JSON.parse(localStorage.getItem('notesList') || '[]');
let tagsList = JSON.parse(localStorage.getItem('tagsList') || '[]');

export const addNoteToNotesList = (data: NoteType) : void => {
    
    updateVariables();
    notesList = [...notesList, data];
    
    setValInLocalStorage('notesList', notesList);
    
    if(data.tags !== undefined){
        addTagsToTagsList(data.tags)
    }  
}

export const addTagsToTagsList = (data: Array<TagType>) : void => {
    
    tagsList = [...tagsList, ...data.filter(tag => {
        let calc = 0;
        for(let i = 0; i < tagsList.length; i ++){
            if(tag.label === tagsList[i].label) calc ++;
        }   
        if(calc === 0) return tag;
    })];

    setValInLocalStorage('tagsList', tagsList);
}

export const deleteNote = (id: number) : Array<NoteType> => {
    
    updateVariables();
    notesList = notesList.filter(note => {
        if (note.id !== id) return note;
    }) 

    setValInLocalStorage('notesList', notesList);
    deleteIrrelevantTags();

    return notesList;
}

export const deleteIrrelevantTags = () => {

    let allTags:Array<TagType> = [];

    notesList.forEach((note: any) => {
        allTags.push(...note.tags);
    })

    let stringTagsArr:Array<string> = [];

    allTags.forEach((tag: TagType) => {
        stringTagsArr.push(tag.label);
    })

    let unicTags = new Set(stringTagsArr);
    tagsList = [];

    unicTags.forEach((tag: string) => {
        tagsList.push({label: tag, id: tag});
    })

    setValInLocalStorage('tagsList', tagsList);
}

const setValInLocalStorage = (listname: string, data: object) => {
    localStorage.setItem(listname, JSON.stringify(data));
}

const updateVariables = () => {
    notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    tagsList = JSON.parse(localStorage.getItem('tagsList') || '[]');
}
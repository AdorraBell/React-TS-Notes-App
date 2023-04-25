import { FolderType, NoteType, TagType } from "../types/types";

let notesList: Array<NoteType> =  JSON.parse(localStorage.getItem('notesList') || '[]');
let tagsList: Array<TagType> = JSON.parse(localStorage.getItem('tagsList') || '[]');
let foldersList = JSON.parse(localStorage.getItem('foldersList') || '[]');

type NoteFolderTypes = NoteType | FolderType;

export const addPointToList = (data: NoteFolderTypes, arrType: string) : void => {
    updateVariables();
    let arr = null;
    arrType === 'notesList' ? arr = notesList : arr = foldersList;

    arr = [...arr, data];

    setValInLocalStorage(arrType, arr);
    
    if(data.tags !== undefined){
        addTagsToTagsList(data.tags);
    }
}

export const takeNoteById = (id: number) => {
    updateVariables();
    let selectedNote = notesList.filter(note => {
        if(note.id === id) return note;
    })

    return selectedNote[0];
}

export const changeNote = (changedNote: NoteType) => {
    updateVariables();

    let newNotesList: Array<NoteType> = [];
    
    notesList.forEach(note => {
        changedNote.id === note.id ? newNotesList.push(changedNote) : newNotesList.push(note); 
    })

    setValInLocalStorage('notesList', newNotesList);
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

export const deletePointFromList = (id: number, arrType: string) : Array<NoteFolderTypes> => {
    updateVariables();
    let arr = null;
    arrType === 'notesList' ? arr = notesList : arr = foldersList;
 
    arr = arr.filter((point: NoteFolderTypes) => {
        if (point.id !== id) return point;
    })

    setValInLocalStorage(arrType, arr);
    deleteIrrelevantTags();

    return arr;
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
    foldersList = JSON.parse(localStorage.getItem('foldersList') || '[]');
}
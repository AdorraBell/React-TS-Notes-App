import { FolderType, NoteFolderTypes, NoteType, TagType } from "../types/types";

let notesList: Array<NoteType> =  JSON.parse(localStorage.getItem('notesList') || '[]');
let tagsList: Array<TagType> = JSON.parse(localStorage.getItem('tagsList') || '[]');
let foldersList = JSON.parse(localStorage.getItem('foldersList') || '[]');

export const addPointToList = (data: NoteFolderTypes, arrType: string) : void => {
    updateVariables();
    let arr = setArr(arrType);
    arr = [...arr, data];
    setValInLocalStorage(arrType, arr);
    
    if(data.tags !== undefined){
        addTagsToTagsList(data.tags);
    }
}

export const takePointById = (id: number, arrType: string) => {
    updateVariables();
    let arr = setArr(arrType);

    let selectedPoint = arr.filter((point: NoteType | FolderType) => {
        if(point.id === id) return point;
    })

    return selectedPoint[0];
}

export const changePoint = (changedPoint: NoteFolderTypes, arrType: string) : void => {
    updateVariables();
    let arr = setArr(arrType);
    let newList: Array<NoteFolderTypes> = [];

    arr.forEach((point: NoteFolderTypes) => {
        changedPoint.id === point.id ? newList.push(changedPoint) : newList.push(point);
    })

    setValInLocalStorage(arrType, newList);
}

export const deletePointFromList = (id: number, arrType: string) : Array<NoteFolderTypes> => {
    updateVariables();
    let arr = setArr(arrType);
 
    arr = arr.filter((point: NoteFolderTypes) => {
        if (point.id !== id) return point;
    })

    setValInLocalStorage(arrType, arr);
    deleteIrrelevantTags(arr);
    return arr;
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

export const deleteIrrelevantTags = (listType: Array<NoteType> | Array<FolderType>) : void => {

    let allTags:Array<TagType> = [];

    listType.forEach((point: any) => {
        allTags.push(...point.tags);
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

const setValInLocalStorage = (listname: string, data: object) : void => {
    localStorage.setItem(listname, JSON.stringify(data));
}

const updateVariables = () : void => {
    notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    tagsList = JSON.parse(localStorage.getItem('tagsList') || '[]');
    foldersList = JSON.parse(localStorage.getItem('foldersList') || '[]');
}

const setArr = (arrType: string) => {
    switch(arrType){
        case 'notesList': return notesList;
        case 'foldersList': return foldersList;
    }
}

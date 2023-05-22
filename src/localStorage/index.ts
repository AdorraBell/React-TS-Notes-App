import { FolderType, NoteFolderTypes, NoteType, TagType } from "../types/types";

let notesList: Array<NoteType> =  JSON.parse(localStorage.getItem('notesList') || '[]');
let tagsList: Array<TagType> = JSON.parse(localStorage.getItem('tagsList') || '[]');
let foldersList = JSON.parse(localStorage.getItem('foldersList') || '[]');

export const addPointToList = (newPoint: NoteFolderTypes, arrType: string) : void => {
    updateVariables();
    let pointsList = setArr(arrType);
    pointsList = [...pointsList, newPoint];
    setValInLocalStorage(arrType, pointsList);
    
    if(newPoint.tags !== undefined){
        addTagsToTagsList(newPoint.tags);
    }
}

export const takePointById = (id: number, arrType: string) => {
    updateVariables();
    const pointsList = setArr(arrType);

    const selectedPoint = pointsList.find((point: NoteType | FolderType) => 
        point.id === id
    )

    return selectedPoint;
}

export const changePoint = (changedPoint: NoteFolderTypes, arrType: string) : void => {
    updateVariables();
    const pointsList = setArr(arrType);
    const newList: Array<NoteFolderTypes> = [];

    pointsList.forEach((point: NoteFolderTypes) => {
        changedPoint.id === point.id ? newList.push(changedPoint) : newList.push(point);
    })

    setValInLocalStorage(arrType, newList);
}

export const deletePointFromList = (id: number, arrType: string) : Array<NoteFolderTypes> => {
    updateVariables();
    let pointsList = setArr(arrType);
 
    pointsList = pointsList.filter((point: NoteFolderTypes) => 
        point.id !== id
    )

    setValInLocalStorage(arrType, pointsList);
    deleteIrrelevantTags(pointsList);
    return pointsList;
}

export const addTagsToTagsList = (newTags: Array<TagType>) : void => {
    tagsList = [...tagsList, ...newTags.filter(tag => {
        const hasMatches = tagsList.some(element => 
            element.label === tag.label    
        )
        if(hasMatches === false) return tag;
    })];

    setValInLocalStorage('tagsList', tagsList);
}

export const deleteIrrelevantTags = (listType: Array<NoteType> | Array<FolderType>) : void => {

    const allTags:Array<TagType> = [];

    listType.forEach((point: NoteFolderTypes) => {
        if(point.tags) allTags.push(...point.tags);
    })

    const stringTagsArr:Array<string> = [];

    allTags.forEach((tag: TagType) => {
        stringTagsArr.push(tag.label);
    })

    const unicTags = new Set(stringTagsArr);
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

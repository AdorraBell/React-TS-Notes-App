import { NoteType, TagType } from "../types/types";

let notesList: Array<NoteType> =  JSON.parse(localStorage.getItem('notesList') || '[]');
let newNotesList = null;
let tagsList = JSON.parse(localStorage.getItem('tagsList') || '[]');

export const addNoteToNotesList = (data: NoteType) : void => {
    notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    notesList = [...notesList, data];
    localStorage.setItem('notesList', JSON.stringify(notesList));
    if(data.tags !== undefined){
        addTagsToTagsList(data.tags)
    }  
}

export const addTagsToTagsList = (data: Array<TagType>) : void => {
    tagsList = JSON.parse(localStorage.getItem('tagsList') || '[]');

    tagsList = [...tagsList, ...data.filter(tag => {
        let calc = 0;
        for(let i = 0; i < tagsList.length; i ++){
            if(tag.label === tagsList[i].label) calc ++;
        }   
        if(calc === 0) return tag;
    })];

    localStorage.setItem('tagsList', JSON.stringify(tagsList));
}

export const deleteNote = (id: number) : Array<NoteType> => {
    notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    notesList = notesList.filter(note => {
            if (note.id !== id) return note;
    }) 
    localStorage.setItem('notesList', JSON.stringify(notesList));

    checkTagsExistence();

    return notesList;
}

export const checkTagsExistence = () => {
    notesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    tagsList = JSON.parse(localStorage.getItem('tagsList') || '[]');
    let newTagsList:any = [];
    
    notesList.forEach(note => {
        let noteTags = note.tags;
        
        if(noteTags !== undefined){
            for(let i = 0; i < noteTags.length; i ++){
                let calc = 0;
                tagsList.forEach((tag: TagType)  => {
                    if(tag.label === noteTags![i].label) calc ++;
                });
                if(calc > 0) newTagsList.push(noteTags[i]);
            }
        }  
    });

    localStorage.setItem('tagsList', JSON.stringify(newTagsList));
}
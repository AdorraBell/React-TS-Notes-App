

let notesList: Array<any> =  JSON.parse(localStorage.getItem('notesList') || '[]');
let newNotesList = null;

export const addNoteToNotesList = (data: Object) : boolean => {
    newNotesList = JSON.parse(localStorage.getItem('notesList') || '[]');
    newNotesList = [...notesList, data];
    localStorage.setItem('notesList', JSON.stringify(newNotesList));
    return true;
}
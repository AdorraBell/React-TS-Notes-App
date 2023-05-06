
const defaulState = {
    notesList: JSON.parse(localStorage.getItem('notesList') || '[]'),
    foldersList: JSON.parse(localStorage.getItem('foldersList') || '[]')
}
 
export const sortReducer = (state: typeof defaulState = defaulState, action: any) => {

    let listType;
    action.listType === 'notesList' ? listType = state.notesList : listType = state.foldersList;

    switch(action.type){
        case 'body': return {...state, [action.listType]: [...listType].sort((a: any, b: any) => a['body'].localeCompare(b['body']))};
        case 'title': return {...state, [action.listType]: [...listType].sort((a: any, b: any) => a['title'].localeCompare(b['title']))};
        case 'id-to-newer': return {...state, [action.listType]: [...listType].sort((a: any, b: any) => a['id'] - b['id'])};
        case 'id-to-older': return {...state, [action.listType]: [...listType].sort((a: any, b: any) => b['id'] - a['id'])};
        case 'set-default': return {...state, [action.listType]: action.value};
        default: return state;
    }
}

const defaulState = {
    notesList: JSON.parse(localStorage.getItem('notesList') || '[]'),
    foldersList: JSON.parse(localStorage.getItem('foldersList') || '[]')
}

interface ActionType {
    type: string,
    listType: string,
    value: string
}
 
export const sortReducer = (state: typeof defaulState = defaulState, action: ActionType) => {

    const listType = action.listType === 'notesList' ? state.notesList : state.foldersList;

    switch(action.type){
        case 'body': 
            return {...state, [action.listType]: [...listType].sort((a, b) => a['body'].localeCompare(b['body']))};
        case 'title': 
            return {...state, [action.listType]: [...listType].sort((a, b) => a['title'].localeCompare(b['title']))};
        case 'id-to-newer': 
            return {...state, [action.listType]: [...listType].sort((a, b) => a['id'] - b['id'])};
        case 'id-to-older': 
            return {...state, [action.listType]: [...listType].sort((a, b) => b['id'] - a['id'])};
        case 'set-default': 
            return {...state, [action.listType]: action.value};
        default: 
            return state;
    }
}
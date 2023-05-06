const defaulState = {
    notesSortType: '',
    foldersSortType: ''
}

export const sortTypeReducer = (state: typeof defaulState = defaulState, action: any) => {

    let listType;
    action.listType === 'notesSortType' ? listType = state.notesSortType : listType = state.foldersSortType;

    switch(action.type){
        case 'setSort': return {...state, [action.listType]: action.value};
        default: return state;
    }

}
const defaulState = {
    notesSortType: '',
    foldersSortType: ''
}

interface ActionType {
    type: string,
    listType: string,
    value: string
}

export const sortTypeReducer = (state: typeof defaulState = defaulState, action: ActionType) => {

    const listType = action.listType === 'notesSortType' ?  state.notesSortType : state.foldersSortType;

    switch(action.type){
        case 'setSort': 
            return {...state, [action.listType]: action.value};
        default: 
            return state;
    }

}
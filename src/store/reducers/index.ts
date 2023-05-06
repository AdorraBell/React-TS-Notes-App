import {combineReducers} from "redux";
import {sortReducer} from "./sortReducer"
import {sortTypeReducer} from "./sortTypeReducer"
import {searchTagsReducer} from "./searchedTagsReducer"


export const reducer = combineReducers({
    sortReducer,
    sortTypeReducer,
    searchTagsReducer
})

export type RootState = ReturnType<typeof reducer>;
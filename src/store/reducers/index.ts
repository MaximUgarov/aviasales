import { combineReducers } from "redux";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
    sort: sortReducer,
})

export type RootState = ReturnType<typeof rootReducer>
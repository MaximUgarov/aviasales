import { Dispatch } from "redux"
import { SortAction, SortActionTypes } from "../../types/sort"
import { SortItem } from "../../types/sort"

export const updateSort = (index: number, sorts: SortItem[]) => {
    return (dispatch: Dispatch<SortAction>) => {
        dispatch({ type: SortActionTypes.UPDATE_SORT, index: index, sort: true, sorts: sorts });
    }
}
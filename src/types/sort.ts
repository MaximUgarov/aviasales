export interface SortItem {
    name: string
    value: string
    active: boolean
}


export interface SortState {
    sorts: SortItem[]
    // loading: boolean
}

export enum SortActionTypes {
    UPDATE_SORT = 'UPDATE_SORT'
}

interface UpdateSort {
    type: SortActionTypes.UPDATE_SORT
    index: number,
    sort: boolean,
    sorts: SortItem[]
}

export type SortAction = UpdateSort
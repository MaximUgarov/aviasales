import { SortState, SortActionTypes, SortAction } from "../../types/sort";

const initialState: SortState = {
    sorts: [{ name: "Самый дешевый", value: "cheap", active: true },
    { name: "Самый быстрый", value: "fast", active: false },
    { name: "Оптимальный", value: "optimal", active: false }
    ]
}

export const sortReducer = (state = initialState, action: SortAction): SortState => {
    switch (action.type) {
        case SortActionTypes.UPDATE_SORT:
            return {
                sorts: state.sorts.map((sort, index) =>
                    index === action.index ? { ...sort, active: action.sort } : { ...sort, active: false }
                )
            }
        default:
            return state
    }
}
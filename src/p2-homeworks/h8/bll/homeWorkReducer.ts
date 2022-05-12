import {UserType} from "../HW8";

type SortUpActionType = {
    type: "sort"
    payload: string
}

type CheckActionType = {
    type: "check"
    payload: number
}

export type ActionType = SortUpActionType | CheckActionType


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }

        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

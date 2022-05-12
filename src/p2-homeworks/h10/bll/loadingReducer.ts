export type initStateType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: "LOADING"
    isLoading: boolean
}
const initState = {
    isLoading: false
}


export const loadingReducer = (state: initStateType = initState, action: LoadingActionType): initStateType => {
    switch (action.type) {
        case "LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: "LOADING", isLoading
})
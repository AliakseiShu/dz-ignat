type ChangeThemesType = ReturnType<typeof changeThemes>
export type InitStateType = typeof initState

const initState = {
    theme: 'some'
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemesType): InitStateType => {
    switch (action.type) {
        case "CHANGE-THEMES": {
            return {...state, theme: action.setting}
        }
        default:
            return state;
    }
};

export const changeThemes = (setting: string) => ({type: "CHANGE-THEMES", setting} as const)


const SET_ERROR = 'SET-ERROR'
const SET_COUNTER_SETTINGS = 'SET-COUNTER-SETTINGS'


export type InitialStateType = {
    error: boolean
    counterSettings: boolean
}

let initialState: InitialStateType = {
    error: false,
    counterSettings: false
}

export const settingsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_COUNTER_SETTINGS:
            return {
                ...state,
                counterSettings: action.counterSettings
            }

        default:
            return state
    }
}

export const setError = (error: boolean) => ({type: SET_ERROR, error} as const)
export const setCounterSettings = (counterSettings: boolean) =>
    ({type: SET_COUNTER_SETTINGS, counterSettings} as const)


type ActionsType = ReturnType<typeof setError> | ReturnType<typeof setCounterSettings>


